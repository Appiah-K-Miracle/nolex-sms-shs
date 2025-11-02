import type { Message, Announcement, ActionCallback } from "@/types/housemaster";

export interface CommunicationProps {
  messages: Message[];
  announcements: Announcement[];
  onSendMessage: ActionCallback<Message>;
  onSendAnnouncement: ActionCallback<Announcement>;
  onViewMessage: ActionCallback<Message>;
}