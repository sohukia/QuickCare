"use client";

import React from "react";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            <div className="lg:col-span-7">
              
              <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                <div className="col-span-4">
                    <Image 
                    className="rounded-xl" 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=920&q=80" 
                    width={200}
                    height={200}
                    alt="Soins de santé" />
                </div>
                <div className="col-span-3">
                  <Image 
                    className="rounded-xl" 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"    
                    width={200}
                    height={200}
                    alt="Hôpital" />
                </div>
                <div className="col-span-5">
                  <Image 
                    className="rounded-xl" 
                    src="/logo.png" 
                    width={200}
                    height={200}
                    alt="Logo QuickCare" />
                </div>
              </div>
              
            </div>

            <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
              <div className="space-y-6 sm:space-y-8">
                
                <div className="space-y-2 md:space-y-4">
                  <h2 className="font-bold text-3xl lg:text-4xl text-[#317359]">
                    QuickCare : rendre les soins de santé simples, rapides et privés
                  </h2>
                  <p className="text-gray-700">
                    Plus besoin d&apos;appeler ni d&apos;attendre pour rien. Accédez en temps réel aux temps d&apos;attente, spécialités et régimes des hôpitaux. Choisissez ce dont vous avez besoin, et optez pour la meilleure option &mdash; où que vous soyez.
                  </p>
                </div>
                

                
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-[#e6f4ec] text-[#317359]">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-bold">Confidentiel par conception</span> &ndash; Vos données restent sur votre appareil. Aucun compte requis.
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-[#e6f4ec] text-[#317359]">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-bold">Ouvert et gratuit</span> &ndash; Sous licence GPLv3. Liberté d&apos;utiliser, modifier et partager.
                      </span>
                    </div>
                  </li>

                  <li className="flex gap-x-3">
                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-[#e6f4ec] text-[#317359]">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    <div className="grow">
                      <span className="text-sm sm:text-base text-gray-700">
                        <span className="font-bold">En amélioration continue</span> &ndash; Votre avis compte. Aidez-nous à améliorer l&apos;accès aux soins pour tous.
                      </span>
                    </div>
                  </li>
                </ul>
                
              </div>
            </div>
            
          </div>
          
        </div>
    );
}
