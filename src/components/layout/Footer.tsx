import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Stats Learning Game
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Plataforma educativa gamificada para aprender Probabilidades, Estadística,
              Machine Learning e Inteligencia Artificial.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/wiki"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Mi Perfil
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
              Contacto
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/RiveraCristian"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/cristian-rivera"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rivera.cristian0504@gmail.com"
                className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2">
            Hecho por{' '}
            <a
              href="https://github.com/RiveraCristian"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              Cristian Rivera
            </a>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            © 2025 Stats Learning Game. MIT License.
          </p>
        </div>
      </div>
    </footer>
  );
};
