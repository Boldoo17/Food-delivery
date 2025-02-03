"use client";
import { Footer } from "./admin/_component/footer";
import { Header } from "./admin/_component/header";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { CategoryType } from "./types";
import { FoodCard } from "./admin/_component/food-card";

export default function Home() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  async function getCategories() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/food-category`
    );
    const data = await res.json();
    setCategories(data);
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <Header />
      <div className="bg-[url(/BG.png)] w-full h-[990px] bg-cover bg-center"></div>
      <div>
        dshfaiurgtu9 gwaeuir yauiwesvraieruyavwteuvrbktsjuecrtfawbjerv wq6
      </div>
      <Footer />
    </div>
  );
}
