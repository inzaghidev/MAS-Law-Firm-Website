import React from 'react';
import {
  FileText,
  CheckCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { Card, CardContent } from '../../components/ui/card';

export function DashboardOverview({ articles = [], documents = [] }) {

  // ======================
  // GREETING BASED ON TIME
  // ======================
  const hour = new Date().getHours();
  let greeting = 'Selamat Datang';

  if (hour >= 5 && hour < 11) greeting = 'Met Pagi';
  else if (hour >= 11 && hour < 15) greeting = 'Met Siang';
  else if (hour >= 15 && hour < 18) greeting = 'Met Sore';
  else greeting = 'Met Malam';

  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // ======================
  // STAT CALCULATION (STATIC DISPLAY)
  // ======================
  const publishedArticles = articles.filter(a => a.status === 'Published').length;
  const draftArticles = articles.filter(a => a.status === 'Draft').length;
  const verifiedDocuments = documents.filter(d => d.status === 'Valid').length;
  const totalDocuments = documents.length;

  const stats = [
    {
      title: 'Total Articles',
      value: articles.length,
      icon: FileText,
      color: 'text-blue-500',
      bg: 'bg-blue-500/10'
    },
    {
      title: 'Published',
      value: publishedArticles,
      icon: CheckCircle,
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
    {
      title: 'Drafts',
      value: draftArticles,
      icon: Clock,
      color: 'text-yellow-500',
      bg: 'bg-yellow-500/10'
    },
    {
      title: 'Verified Docs',
      value: verifiedDocuments,
      icon: ShieldCheck,
      color: 'text-[#AE8737]',
      bg: 'bg-[#AE8737]/10'
    },
    {
      title: 'Total Docs',
      value: totalDocuments,
      icon: FileText,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    }
  ];

  // ======================
  // RECENT DATA
  // ======================
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  const recentDocs = [...documents]
    .sort((a, b) => new Date(b.issueDate) - new Date(a.issueDate))
    .slice(0, 3);

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#191919]">
          {greeting}, Admin 🫶🏻
        </h2>
        <p className="text-slate-500 text-sm">{today}</p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="border-none shadow-sm hover:shadow-md transition"
            >
              <CardContent className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-[#191919]">
                    {stat.value}
                  </h3>
                </div>
                <div className={`p-3 rounded-full ${stat.bg}`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* RECENT SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Recent Articles */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-[#191919] mb-4">
              Recent Articles
            </h3>

            {recentArticles.length === 0 ? (
              <p className="text-slate-400 text-sm">No articles yet</p>
            ) : (
              <div className="space-y-4">
                {recentArticles.map(article => (
                  <div
                    key={article.id}
                    className="flex items-center gap-4 pb-4 border-b border-slate-100 last:border-0"
                  >
                    <div className="w-12 h-12 rounded bg-slate-100 overflow-hidden flex-shrink-0">
                      {article.image_url ? (
                        <img
                          src={article.image_url}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <FileText className="w-6 h-6 text-slate-400 m-auto" />
                      )}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#191919] line-clamp-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {article.date} • {article.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Recent Documents */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold text-[#191919] mb-4">
              Recent Documents
            </h3>

            {recentDocs.length === 0 ? (
              <p className="text-slate-400 text-sm">No documents yet</p>
            ) : (
              <div className="space-y-4">
                {recentDocs.map(doc => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between pb-4 border-b border-slate-100 last:border-0"
                  >
                    <div>
                      <h4 className="font-medium text-[#191919]">
                        {doc.clientName}
                      </h4>
                      <p className="text-xs text-slate-500">
                        {doc.code} • {doc.type}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      doc.status === 'Valid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
