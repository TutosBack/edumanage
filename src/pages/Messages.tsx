import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  conversations, 
  messages, 
  users, 
  courses,
  sendMessage, 
  markMessageAsRead, 
  getUserConversations, 
  getConversationMessages 
} from '../data/mockData';
import { 
  MessageSquare, 
  Send, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Search,
  Phone,
  Video,
  MoreVertical,
  ArrowLeft
} from 'lucide-react';

const Messages: React.FC = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [showMobileChat, setShowMobileChat] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const userConversations = getUserConversations(user?.id || 0);
  const filteredConversations = userConversations.filter(conv => {
    const otherParticipant = users.find(u => 
      conv.participants.includes(u.id) && u.id !== user?.id
    );
    return otherParticipant?.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);
  const conversationMessages = selectedConversation ? getConversationMessages(selectedConversation) : [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversationMessages]);

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedConversationData || !user) return;

    const otherParticipant = selectedConversationData.participants.find(id => id !== user.id);
    if (!otherParticipant) return;

    sendMessage(
      user.id, 
      otherParticipant, 
      newMessage.trim(), 
      'text', 
      selectedConversationData.course_id
    );
    
    setNewMessage('');
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      const audioChunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        if (selectedConversationData && user) {
          const otherParticipant = selectedConversationData.participants.find(id => id !== user.id);
          if (otherParticipant) {
            sendMessage(
              user.id,
              otherParticipant,
              'Audio message',
              'audio',
              selectedConversationData.course_id,
              audioUrl,
              recordingTime
            );
          }
        }
        
        stream.getTracks().forEach(track => track.stop());
        setRecordingTime(0);
      };

      mediaRecorder.start();
      setIsRecording(true);
      
      recordingIntervalRef.current = setInterval(() => {
        setRecordingTime(prev => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Could not access microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getOtherParticipant = (conversation: any) => {
    return users.find(u => 
      conversation.participants.includes(u.id) && u.id !== user?.id
    );
  };

  const getCourseInfo = (courseId?: number) => {
    if (!courseId) return null;
    return courses.find(c => c.id === courseId);
  };

  const ConversationList = () => (
    <div className="w-full lg:w-1/3 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Messages</h2>
        <div className="relative">
          <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {filteredConversations.map((conversation) => {
          const otherParticipant = getOtherParticipant(conversation);
          const course = getCourseInfo(conversation.course_id);
          const unreadCount = conversationMessages.filter(m => 
            m.receiver_id === user?.id && !m.is_read
          ).length;

          return (
            <div
              key={conversation.id}
              onClick={() => {
                setSelectedConversation(conversation.id);
                setShowMobileChat(true);
                // Mark messages as read
                conversationMessages
                  .filter(m => m.receiver_id === user?.id && !m.is_read)
                  .forEach(m => markMessageAsRead(m.id));
              }}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === conversation.id ? 'bg-primary-50 border-primary-200' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-700">
                    {otherParticipant?.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {otherParticipant?.name}
                    </p>
                    {unreadCount > 0 && (
                      <span className="bg-primary text-white text-xs rounded-full px-2 py-1">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  {course && (
                    <p className="text-xs text-gray-500 truncate">{course.name}</p>
                  )}
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.last_message?.content || 'No messages yet'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const ChatArea = () => {
    if (!selectedConversationData) {
      return (
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
            <p className="text-gray-600">Choose a conversation to start messaging</p>
          </div>
        </div>
      );
    }

    const otherParticipant = getOtherParticipant(selectedConversationData);
    const course = getCourseInfo(selectedConversationData.course_id);

    return (
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowMobileChat(false)}
                className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  {otherParticipant?.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {otherParticipant?.name}
                </h3>
                {course && (
                  <p className="text-sm text-gray-500">{course.name}</p>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {conversationMessages.map((message) => {
            const isOwn = message.sender_id === user?.id;
            const sender = users.find(u => u.id === message.sender_id);

            return (
              <div
                key={message.id}
                className={`flex ${isOwn ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  isOwn 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  {message.message_type === 'text' ? (
                    <p className="text-sm">{message.content}</p>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <button className="p-1 rounded-full hover:bg-black hover:bg-opacity-10">
                        <Play className="h-4 w-4" />
                      </button>
                      <span className="text-sm">
                        Audio ({formatTime(message.audio_duration || 0)})
                      </span>
                    </div>
                  )}
                  <p className={`text-xs mt-1 ${
                    isOwn ? 'text-primary-200' : 'text-gray-500'
                  }`}>
                    {new Date(message.sent_at).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            );
          })}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          {isRecording && (
            <div className="mb-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-red-700 text-sm">Recording...</span>
                </div>
                <span className="text-red-700 text-sm font-mono">
                  {formatTime(recordingTime)}
                </span>
              </div>
            </div>
          )}
          
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                disabled={isRecording}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:bg-gray-100"
              />
            </div>
            
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className={`p-2 rounded-lg transition-colors ${
                isRecording 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
            </button>
            
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim() || isRecording}
              className="p-2 bg-primary text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Mobile: Show conversation list or chat */}
      <div className="lg:hidden w-full">
        {showMobileChat ? <ChatArea /> : <ConversationList />}
      </div>
      
      {/* Desktop: Show both */}
      <div className="hidden lg:flex w-full">
        <ConversationList />
        <ChatArea />
      </div>
    </div>
  );
};

export default Messages;