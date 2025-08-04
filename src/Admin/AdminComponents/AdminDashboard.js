import React from "react";
import { Upload, Image } from "lucide-react"; // optional: lucide-react icons
import { FaUsers } from "react-icons/fa";

const AdminDashboard = () => {
  const cards = [
    {
      title: "Manage Users",
      href: "/admin/panel/all-users",
      icon: <FaUsers className="w-6 h-6 text-blue-500" />, // optional
    },
    {
      title: "Upload Name-Comments",
      href: "/admin/panel/add-names-comments",
      icon: <Upload className="w-6 h-6 text-blue-500" />, // optional
    },
    {
      title: "Upload Images",
      href: "/admin/panel/upload-images",
      icon: <Image className="w-6 h-6 text-blue-500" />, // optional
    },
  ];

  return (
    <section className="px-6 py-12 w-full bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">
          Admin Dashboard
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-blue-300 group"
            >
              <div className="flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 text-center group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
