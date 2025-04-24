
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import LeadMagnetForm from "./LeadMagnetForm";

const FooterSection = () => {
  const [open, setOpen] = useState(false);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-primary text-white py-16">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              Don't Wait – Start Your 3D Printing Journey Today!
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Join thousands of creators who have transformed their hobby into a thriving business with my proven blueprint.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-6">
                    Get Your Free Guide
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <LeadMagnetForm setDialogOpen={setOpen} />
                </DialogContent>
              </Dialog>
              
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-white font-bold text-lg px-8 py-6">
                Browse All Blueprints
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900 text-gray-300 py-10">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-white text-xl font-bold mb-4">Aly's 3D Printing Blueprint</h3>
              <p className="mb-4">
                Learn how to turn your 3D printing hobby into a profitable business with my step-by-step blueprint.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/aly3dprints" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="mailto:contact@alys3dstudio.com" className="text-white hover:text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-secondary">Home</a></li>
                <li><a href="#" className="hover:text-secondary">About Aly</a></li>
                <li><a href="#" className="hover:text-secondary">Blueprints</a></li>
                <li><a href="#" className="hover:text-secondary">Free Guide</a></li>
                <li><a href="#" className="hover:text-secondary">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-secondary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-secondary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-secondary">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-center">
            <p>© {currentYear} Aly's 3D Studio. All rights reserved.</p>
            <p className="mt-2">Website hosted at alys3dstudio.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
