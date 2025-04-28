
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const AIHubHero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8 bg-gradient-to-r from-primary-light/30 to-secondary/10 rounded-xl shadow-sm"
    >
      <h1 className="text-3xl font-bold mb-3">Your AI-Powered 3D Print Business Assistant</h1>
      <p className="text-lg text-gray-600 mb-6 max-w-3xl">
        Access all the AI tools you need to create, market, and scale your 3D printing business, 
        without leaving the platform. Save time and boost revenue with integrated workflows designed specifically for 3D print entrepreneurs.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button 
          onClick={() => navigate('/ai-hub/product-development/idea-generator')}
          className="bg-primary hover:bg-primary/90"
        >
          Generate Product Ideas <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button 
          onClick={() => navigate('/ai-hub/my-projects')}
          variant="outline"
        >
          View My Projects <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
};
