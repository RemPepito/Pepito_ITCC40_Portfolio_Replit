import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for sending messages
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate form data
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // In a real application, you might store this in a database
      // or send an email notification
      
      return res.status(200).json({ 
        message: 'Message received successfully' 
      });
    } catch (error) {
      console.error('Error handling contact form submission:', error);
      return res.status(500).json({ 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
