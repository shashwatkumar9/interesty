
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const OlympiakosTicketsPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Helmet>
        <title>Olympiacos FC Tickets | See The Legend at Karaiskakis Stadium!</title>
        <meta name="description" content="Buy official Olympiacos FC tickets for Super League Greece, Europa League, and Greek Cup matches. Experience the passionate atmosphere at Karaiskakis Stadium." />
        <meta name="keywords" content="olympiacos tickets, olympiakos tickets, legend tickets, karaiskakis stadium tickets, super league greece olympiacos tickets, europa league olympiacos tickets" />
        <link rel="canonical" href="https://www.ticketsfootball.com/olympiakos-tickets" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/europa-league-tickets" className="hover:text-green-600">Europa League Tickets</Link>
          <span className="mx-2">/</span>
          <span className="font-semibold">Olympiacos Tickets</span>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Olympiacos FC Tickets</h1>
          <p className="text-lg text-gray-700 mb-6">
            Experience the passionate support and rich history of Olympiacos FC at the Karaiskakis Stadium. The Legend is Greece's most successful club, with a dedicated fanbase and a strong presence in European competitions.          </p>

          {/* Call to Action */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-2">Secure Your Olympiacos Tickets!</h2>
            <p className="mb-4">Tickets for Olympiacos matches are always in high demand. Don't miss your chance to be part of the action at Karaiskakis Stadium.</p>
            <a href="#ticket-listings" className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors flex items-center w-max">
              View Ticket Listings <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Why Choose Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Trusted Source for Olympiacos Tickets</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Wide Selection</h4>
                  <p>We offer a comprehensive selection of tickets for all Olympiacos FC home and away matches.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Authenticity Guaranteed</h4>
                  <p>All tickets are sourced from trusted suppliers and are 100% authentic.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-3">✔</span>
                <div>
                  <h4 className="font-semibold">Secure Transactions</h4>
                  <p>Our platform ensures a safe and secure purchasing experience.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Ticket Listings Placeholder */}
          <div id="ticket-listings" className="border-t pt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Available Tickets for Olympiacos Matches</h3>
            <div className="text-center text-gray-500 border-2 border-dashed rounded-lg p-12">
              <p className="mb-2">Ticket listings are not yet available.</p>
              <p>Please check back closer to match dates for a full list of available tickets.</p>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-12 border-t pt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Explore More Greek Football Tickets</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link to="/super-league-greece-tickets" className="text-red-600 hover:underline">Super League Greece Tickets</Link>
              <Link to="/europa-league-tickets" className="text-red-600 hover:underline">Europa League Tickets</Link>
              <Link to="/greek-cup-tickets" className="text-red-600 hover:underline">Greek Cup Tickets</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OlympiakosTicketsPage;
