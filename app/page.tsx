"use client";
import React, { useState, useEffect } from 'react';
import { Flower, Clock, MapPin, CheckCircle, ChevronRight, ShieldCheck, Camera, PhoneCall } from 'lucide-react';

export default function FuneralOrderApp() {
  const [form, setForm] = useState({
    name: '', gender: 'male', date: '', location: '', sender: '', msg: '駕鶴西歸', tel: ''
  });

  // 模擬上線後的提交功能
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("訂單已成功傳送！專人將於 10 分鐘內與您聯繫確認細節。");
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      {/* 精品導航欄 */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-serif font-bold tracking-[0.4em] text-gray-800">御花典</span>
          <span className="text-[8px] text-[#A68D5F] tracking-widest uppercase">Premium Funeral Florist</span>
        </div>
        <div className="hidden md:flex gap-8 text-[10px] tracking-widest text-gray-400 font-bold uppercase">
          <span className="text-black border-b border-black">產品訂購</span>
          <span>配送流程</span>
          <span>售後服務</span>
        </div>
        <a href="tel:0800000000" className="p-2 bg-gray-50 rounded-full"><PhoneCall size={18} className="text-gray-600"/></a>
      </nav>

      {/* 主內容區：自適應網格 */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12 lg:p-10">
        
        {/* 左側：高清展示與介紹 */}
        <div className="lg:col-span-7 space-y-6">
          <div className="aspect-[4/5] bg-white overflow-hidden lg:rounded-2xl shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=1200" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
          <div className="p-6 lg:p-0">
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-serif text-gray-900 leading-snug">極致尊榮・白百合<br/>典雅高架花籃 (一對)</h1>
              <p className="text-2xl font-light text-[#A68D5F] italic font-serif">NT$ 4,500</p>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-gray-100">
               <div className="flex flex-col items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest"><TruckIcon/> 專人配送</div>
               <div className="flex flex-col items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest"><CameraIcon/> 現場回報</div>
               <div className="flex flex-col items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest"><ShieldIcon/> 品質保證</div>
               <div className="flex flex-col items-center gap-2 text-[10px] text-gray-400 font-bold tracking-widest"><ClockIcon/> 準時抵達</div>
            </div>
          </div>
        </div>

        {/* 右側：訂單表單與即時預覽 */}
        <div className="lg:col-span-5 px-4 pb-12">
          <form onSubmit={handleOrder} className="bg-white p-8 lg:p-10 rounded-3xl shadow-xl border border-gray-50 sticky top-28 space-y-6">
            <h2 className="text-sm font-bold tracking-[0.2em] border-l-2 border-[#A68D5F] pl-3 mb-8">訂製詳細內容</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] text-gray-400 font-bold tracking-widest">往生者姓名</label>
                <input required className="w-full border-b py-2 outline-none focus:border-black font-serif text-lg" 
                  placeholder="林大山" onChange={e => setForm({...form, name: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-gray-400 font-bold tracking-widest">性別</label>
                <select className="w-full border-b py-2 bg-transparent outline-none" onChange={e => setForm({...form, gender: e.target.value})}>
                  <option value="male">先生 (男)</option>
                  <option value="female">女士 (女)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] text-gray-400 font-bold tracking-widest flex items-center gap-1"><MapPin size={10}/> 配送地點 (殯儀館/廳別)</label>
              <input required className="w-full border-b py-2 outline-none focus:border-black" 
                placeholder="例：台北第一殯儀館 景行廳" onChange={e => setForm({...form, location: e.target.value})} />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] text-gray-400 font-bold tracking-widest flex items-center gap-1"><Clock size={10}/> 公祭時間</label>
                <input required type="datetime-local" className="w-full border-b py-2 text-xs text-gray-500" onChange={e => setForm({...form, date: e.target.value})} />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] text-gray-400 font-bold tracking-widest">聯絡電話</label>
                <input required type="tel" className="w-full border-b py-2 outline-none" placeholder="接收配送相片" onChange={e => setForm({...form, tel: e.target.value})} />
              </div>
            </div>

            <div className="space-y-1 pt-4">
              <label className="text-[10px] text-gray-400 font-bold tracking-widest">送花人全銜 (下款)</label>
              <input required className="w-full border-b py-2 outline-none focus:border-black font-medium" 
                placeholder="例：○○有限公司 董事長 王大同" onChange={e => setForm({...form, sender: e.target.value})} />
            </div>

            {/* 即時卡片模擬 */}
            <div className="mt-8 bg-[#FAF9F6] p-8 border border-gray-100 flex justify-between items-center h-64 shadow-inner relative">
               <span className="absolute top-2 right-3 text-[8px] text-gray-300 font-bold italic tracking-widest">REAL-TIME PREVIEW</span>
               <div className="[writing-mode:vertical-rl] font-serif text-sm font-bold text-gray-500">{form.name} {form.gender === 'male' ? '先生' : '女士'} 千古</div>
               <div className="[writing-mode:vertical-rl] font-serif text-4xl font-bold tracking-[0.4em] text-gray-800">{form.msg}</div>
               <div className="[writing-mode:vertical-rl] font-serif text-sm font-bold text-gray-500 flex items-end">{form.sender} 敬輓</div>
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#2D2E2C] text-white py-5 rounded-sm font-serif tracking-[0.4em] text-lg hover:bg-black transition-all flex justify-center items-center gap-2">
              {isSubmitting ? "訂單傳送中..." : "確認資訊立即訂購"} <ChevronRight size={18}/>
            </button>
          </form>
        </div>
      </main>

      {/* 手機版固定底部按鈕 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex justify-between items-center z-[60] shadow-2xl">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] text-gray-400">總金額</span>
          <span className="text-xl font-serif text-[#A68D5F]">NT$ 4,500</span>
        </div>
        <button className="bg-[#2D2E2C] text-white px-10 py-3 rounded-full font-serif tracking-widest text-sm">立即結帳</button>
      </div>
    </div>
  );
}

// 簡易圖示組件
const TruckIcon = () => <div className="p-2 bg-gray-50 rounded-full"><Clock size={16}/></div>;
const CameraIcon = () => <div className="p-2 bg-gray-50 rounded-full"><Camera size={16}/></div>;
const ShieldIcon = () => <div className="p-2 bg-gray-50 rounded-full"><ShieldCheck size={16}/></div>;
const ClockIcon = () => <div className="p-2 bg-gray-50 rounded-full"><Clock size={16}/></div>;
