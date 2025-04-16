
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Mail, Calendar, Trash2, Search, Filter, Eye, ExternalLink, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  service: string;
  message: string;
  date: string;
  whatsapp: string;
}

const MessagesAdmin = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = localStorage.getItem('contact-messages');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [viewedMessage, setViewedMessage] = useState<Message | null>(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const handleDeleteMessage = (id: string) => {
    const updatedMessages = messages.filter(msg => msg.id !== id);
    setMessages(updatedMessages);
    localStorage.setItem('contact-messages', JSON.stringify(updatedMessages));
    toast({
      title: "Message deleted",
      description: "The message has been deleted successfully.",
      variant: "default",
    });
  };

  const handleViewMessage = (message: Message) => {
    setViewedMessage(message);
    setIsViewDialogOpen(true);
  };

  // Filter messages based on search term
  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    msg.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.service.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getServiceBadgeColor = (service: string) => {
    const serviceMap: Record<string, string> = {
      'Video Production': 'bg-blue-500',
      'Video Editing': 'bg-indigo-500',
      'Design': 'bg-purple-500',
      'Branding': 'bg-pink-500',
      'Web Design': 'bg-green-500',
      'Editorial Design': 'bg-amber-500',
    };
    
    return serviceMap[service] || 'bg-gray-500';
  };

  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary/10 rounded-full">
            <Mail className="h-5 w-5 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Received Messages</h2>
          
          {messages.length > 0 && (
            <Badge variant="outline" className="ml-2">
              {messages.length} {messages.length === 1 ? 'message' : 'messages'}
            </Badge>
          )}
        </div>
        
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input 
              placeholder="Search messages..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setSearchTerm("")}
            className="hidden sm:flex"
            disabled={!searchTerm}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {filteredMessages.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 dark:bg-gray-900 rounded-lg border border-dashed border-gray-300 dark:border-gray-700">
          <Mail className="h-12 w-12 mx-auto mb-4 text-gray-400 dark:text-gray-500" />
          <p className="text-gray-500 dark:text-gray-400 font-medium">No messages found</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-1">
            {messages.length > 0 ? 'Try adjusting your search terms' : 'When clients submit the contact form, messages will appear here'}
          </p>
        </div>
      ) : (
        <ScrollArea className="h-[600px] rounded-md border">
          <Table>
            <TableHeader className="bg-gray-50 dark:bg-gray-900 sticky top-0 z-10">
              <TableRow>
                <TableHead className="w-[100px]">Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>WhatsApp</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Message</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map((msg) => (
                <TableRow key={msg.id} className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                  <TableCell className="whitespace-nowrap font-medium">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-3.5 w-3.5" />
                      {msg.date}
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">{msg.name}</TableCell>
                  <TableCell>
                    <a 
                      href={`mailto:${msg.email}`} 
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      {msg.email}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </TableCell>
                  <TableCell>
                    {msg.whatsapp ? (
                      <a 
                        href={`https://wa.me/${msg.whatsapp.replace(/[^0-9]/g, '')}`} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline flex items-center gap-1"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        {msg.whatsapp}
                      </a>
                    ) : (
                      <span className="text-gray-400 dark:text-gray-500 italic">Not provided</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getServiceBadgeColor(msg.service)} text-white`}>
                      {msg.service}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{msg.subject}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{msg.message}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleViewMessage(msg)}
                        className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteMessage(msg.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      )}

      {/* Message Detail Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          {viewedMessage && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <span>{viewedMessage.subject}</span>
                  <Badge className={`${getServiceBadgeColor(viewedMessage.service)} text-white ml-2`}>
                    {viewedMessage.service}
                  </Badge>
                </DialogTitle>
                <DialogDescription className="flex items-center justify-between">
                  <span>From: {viewedMessage.name} &lt;{viewedMessage.email}&gt;</span>
                  <span className="text-gray-500 text-sm">{viewedMessage.date}</span>
                </DialogDescription>
              </DialogHeader>
              
              <div className="grid gap-4">
                {viewedMessage.whatsapp && (
                  <div>
                    <h4 className="text-sm font-medium mb-1">WhatsApp</h4>
                    <a 
                      href={`https://wa.me/${viewedMessage.whatsapp.replace(/[^0-9]/g, '')}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline flex items-center gap-1"
                    >
                      <Phone className="h-4 w-4" />
                      {viewedMessage.whatsapp}
                    </a>
                  </div>
                )}
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Message</h4>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-md border">
                    <p className="whitespace-pre-wrap">{viewedMessage.message}</p>
                  </div>
                </div>
              </div>
              
              <DialogFooter>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleDeleteMessage(viewedMessage.id);
                    setIsViewDialogOpen(false);
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <DialogClose asChild>
                  <Button variant="outline">Close</Button>
                </DialogClose>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MessagesAdmin;
