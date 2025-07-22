import { Github, Linkedin, Mail } from 'lucide-react';

const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-6 py-4">
      <a href="https://github.com/Fiakosorio" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300">
        <Github size={28} />
      </a>
      <a href="https://www.linkedin.com/in/jmosorio-1982/" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300">
        <Linkedin size={28} />
      </a>
      <a href="mailto:juanmosorio@hotmail.com" className="text-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-300">
        <Mail size={28} />
      </a>
    </div>
  );
};

export default SocialIcons;
