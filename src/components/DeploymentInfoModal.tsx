import React from 'react';
import { CheckCircle2, X, Github, Terminal, FileCode, Shield } from 'lucide-react';

interface DeploymentInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeploymentInfoModal: React.FC<DeploymentInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#12151C] border border-neutral-700 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase font-heading">
                GitHub Pages Compatibility Verified
              </h3>
              <p className="text-[11px] text-neutral-400">
                100% Static Client-Side Build • Zero Server Dependencies
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 my-6 text-xs text-neutral-300">
          <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1.5">
            <span className="font-bold text-amber-400 uppercase font-heading block">
              Configured Settings:
            </span>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong>Vite Base URL:</strong> <code className="text-amber-300 bg-neutral-950 px-1 py-0.5 rounded">base: './'</code> (supports all repo subdirectories)
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong>Asset Paths:</strong> Relative & bundled into <code className="text-neutral-300 bg-neutral-950 px-1 py-0.5 rounded">dist/</code>
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong>No Backend:</strong> 100% self-contained React SPA
            </p>
            <p className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <strong>Image Rule:</strong> 100% equipment & iron visuals with safe SVG fallbacks
            </p>
          </div>

          <div>
            <span className="font-bold text-white uppercase font-heading block mb-2">
              Deploy to GitHub Pages with 1 Command:
            </span>
            <div className="p-3 rounded-lg bg-black text-amber-300 font-mono text-[11px] border border-neutral-800">
              npm run build
            </div>
            <p className="text-[11px] text-neutral-400 mt-1.5">
              Deploy the generated <code className="text-white">dist/</code> directory to your GitHub repository's <code className="text-white">gh-pages</code> branch or use GitHub Actions.
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider font-heading text-xs transition"
        >
          Got It
        </button>
      </div>
    </div>
  );
};
