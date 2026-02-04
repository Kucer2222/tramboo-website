import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function LogoPage() {
  const downloadLogo = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 2000;
    canvas.height = 1000;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.font = "bold 240px Outfit";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("tramboo", canvas.width / 2, canvas.height / 2);
      
      const link = document.createElement("a");
      link.download = "tramboo-logo.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center tram-gradient p-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="tram-display text-8xl font-bold mb-10">tramboo</h1>
        <button 
          onClick={downloadLogo}
          className="tram-focus inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg hover:shadow-xl transition"
        >
          <Download className="h-6 w-6" />
          Download high-res PNG
        </button>
      </motion.div>
    </div>
  );
}
