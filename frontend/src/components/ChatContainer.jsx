import React, { useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./sekeletons/MessageSkeleton";

function ChatContainer() {
  const { messages, getMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getMessages(selectedUser._id);
  }, [getMessages, selectedUser]);

   if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return(
    <div className="flex flex-1 flex-col overflow-auto">
    <ChatHeader />
    <p>Messages...</p>
    <MessageInput />
    </div>
  );
}

export default ChatContainer;
