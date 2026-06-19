// Mock dashboard data. Swap with a real fetch in your app.

export interface ChatPreview {
  id: string;
  name: string;
  preview: string;
  avatar: string;
  unread?: number;
}

export const CHATS: ChatPreview[] = [
  { id: "1", name: "Mithun Grives", preview: "Yeah, the colors look great now.",  avatar: "https://i.pravatar.cc/72?img=14", unread: 2 },
  { id: "2", name: "Anika Patel",   preview: "Pushed the migration script.",      avatar: "https://i.pravatar.cc/72?img=49" },
  { id: "3", name: "Karim Yousef",  preview: "Approved — ship it.",                avatar: "https://i.pravatar.cc/72?img=12", unread: 1 },
  { id: "4", name: "Liu Qing",      preview: "Quick call before standup?",         avatar: "https://i.pravatar.cc/72?img=15" },
  { id: "5", name: "Tomas Ramirez", preview: "Notes from the design crit.",        avatar: "https://i.pravatar.cc/72?img=16" },
];

export interface Reminder {
  id: string;
  date: string;
  title: string;
  body: string;
  variant: "peach" | "yellow";
}

export const REMINDERS: Reminder[] = [
  { id: "r1", date: "27 Sep, 2024", title: "Annual Book Fair",    body: "Open to all members. Volunteer slots still available.", variant: "peach" },
  { id: "r2", date: "02 Oct, 2024", title: "Art Competition",     body: "Submissions close at 6 pm. Theme: cities at night.",    variant: "yellow" },
  { id: "r3", date: "11 Oct, 2024", title: "Quarterly Town Hall", body: "Numbers, what shipped, what's next. Hybrid.",           variant: "peach" },
];
