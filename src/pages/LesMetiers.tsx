import React from 'react';
import { Link } from 'react-router-dom';

const LesMetiers = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-24 pb-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Les Métiers</h1>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez nos différents domaines d'expertise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <MetierCard title="Conseil" path="/metiers/conseil" />
          <MetierCard title="Relation" path="/metiers/relation" />
          <MetierCard title="Digital" path="/metiers/digital" />
          <MetierCard title="Événementiel" path="/metiers/evenementiel" />
          <MetierCard
            title="Relation Publique"
            path="/metiers/relation-publique"
          />
        </div>
      </section>
    </div>
  );
};

const MetierCard = ({ title, path }: { title: string; path: string }) => (
  <Link
    to={path}
    className="bg-gray-100 p-6 rounded-lg text-center shadow hover:shadow-lg transition"
  >
    <h3 className="text-xl font-bold text-blue-600">{title}</h3>
  </Link>
);

export default LesMetiers;
