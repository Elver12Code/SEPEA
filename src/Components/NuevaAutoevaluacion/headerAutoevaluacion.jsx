"use client";
import { Bell, Mail } from 'lucide-react';
import Image from 'next/image';


export default function HeaderAutoevaluacion() {
    
    return (
      <header className=" flex ">
        <div className="bg-white max-w-[200px] max-h-[80px] p-1">
        <Image
          src="/logo_ogc.png"
          alt="OGC Logo"
          width={150}
          height={60}
          className="mb-8"
        />
        </div>
        <div className='flex justify-between bg-blue-600 text-white p-4 w-full'>
        <nav className="text-sm mb-4">
        <a href="#" className="text-xl font-semibold">Oficina de Gestión de Calidad</a> &gt;&gt; <a href="#" className="text-xl font-semibold">Trámites</a>
        </nav>
        
       <div className='flex items-center space-x-6'> 
        <div className="flex space-x-6">
            <div className="relative">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3+
                </span>
            </div>
            <div className="relative">
                <Mail className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                7
                </span>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <span className="text-lg">Perfil</span>
            <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Douglas McGee"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
       </div>
       </div>
      </header>
    );
  }