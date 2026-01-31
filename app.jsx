import React, { useState, useRef, useEffect } from 'react';
import { Send, Car, Heart, Home, Plane, ShoppingCart, MessageCircle, X, Check, ChevronRight, Calculator, FileText, User, Phone, Mail, Calendar, Download, CreditCard, Building, Users, TrendingUp, Clock, DollarSign, Package, MapPin, Shield } from 'lucide-react';

const StyleMatchAppComplete = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [userRole, setUserRole] = useState('client'); // 'client' ou 'admin'
  const [selectedInsurance, setSelectedInsurance] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Bienvenue chez MAM ASSUR ! Je suis votre assistant virtuel. Comment puis-je vous aider aujourd\'hui ?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  // États pour les différents formulaires
  const [autoForm, setAutoForm] = useState({
    marque: '', modele: '', annee: '', puissanceFiscale: '', usage: 'personnel',
    duree: '12', formule: 'tiers_simple', age: '', anciennetePermis: '', bonusMalus: '100'
  });

  const [santeForm, setSanteForm] = useState({
    typeCouverture: 'individuelle',
    nombreBeneficiaires: '1',
    ageAssure: '',
    formule: 'basique',
    duree: '12',
    maladiesChroniques: 'non'
  });

  const [habitationForm, setHabitationForm] = useState({
    typeLogement: 'appartement',
    superficie: '',
    valeurBiens: '',
    zone: 'urbaine',
    formule: 'basique',
    duree: '12',
    systemeSecurite: 'non'
  });

  const [voyageForm, setVoyageForm] = useState({
    destination: '',
    duree: '',
    nombreVoyageurs: '1',
    formule: 'basique',
    activitesRisque: 'non',
    ageVoyageurs: ''
  });

  const [quote, setQuote] = useState(null);
  const [subscriptionData, setSubscriptionData] = useState({
    nom: '', prenom: '', telephone: '', email: '', adresse: ''
  });

  // État pour les devis enregistrés (simulation)
  const [savedQuotes, setSavedQuotes] = useState([
    { id: 1, client: 'KOUASSI Jean', type: 'Auto', montant: 125000, statut: 'En attente', date: '2026-01-28' },
    { id: 2, client: 'TOURE Aminata', type: 'Santé', montant: 85000, statut: 'Approuvé', date: '2026-01-29' },
    { id: 3, client: 'DIALLO Ibrahim', type: 'Habitation', montant: 95000, statut: 'En attente', date: '2026-01-30' },
    { id: 4, client: 'N\'GUESSAN Marie', type: 'Voyage', montant: 45000, statut: 'Souscrit', date: '2026-01-31' },
  ]);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  // Types d'assurance
  const insuranceTypes = [
    {
      id: 'auto', name: 'Assurance Auto', icon: Car, color: 'bg-blue-500',
      description: 'Protection complète pour votre véhicule',
      features: ['Tiers simple', 'Tiers complet', 'Tous risques', 'Assistance 24/7']
    },
    {
      id: 'sante', name: 'Assurance Santé', icon: Heart, color: 'bg-red-500',
      description: 'Couverture médicale pour vous et votre famille',
      features: ['Hospitalisation', 'Soins ambulatoires', 'Maternité', 'Pharmacie']
    },
    {
      id: 'habitation', name: 'Assurance Habitation', icon: Home, color: 'bg-green-500',
      description: 'Protégez votre domicile et vos biens',
      features: ['Incendie', 'Vol', 'Dégâts des eaux', 'Responsabilité civile']
    },
    {
      id: 'voyage', name: 'Assurance Voyage', icon: Plane, color: 'bg-purple-500',
      description: 'Voyagez l\'esprit tranquille',
      features: ['Annulation', 'Rapatriement', 'Bagages', 'Assistance médicale']
    }
  ];

  // Accessoires
  const accessories = [
    { name: 'Extincteur', price: '15000 FCFA', image: '🧯' },
    { name: 'Trousse de secours', price: '8000 FCFA', image: '🩹' },
    { name: 'Gilet de sécurité', price: '3500 FCFA', image: '🦺' },
    { name: 'Triangle de signalisation', price: '5000 FCFA', image: '⚠️' },
    { name: 'Câbles de démarrage', price: '12000 FCFA', image: '🔌' },
    { name: 'Compresseur portable', price: '25000 FCFA', image: '💨' }
  ];

  // Calculs de tarifs
  const calculateAutoQuote = () => {
    let basePrice = 0;
    switch (autoForm.formule) {
      case 'tiers_simple': basePrice = 45000; break;
      case 'tiers_complet': basePrice = 85000; break;
      case 'tous_risques': basePrice = 150000; break;
    }

    const puissance = parseInt(autoForm.puissanceFiscale) || 5;
    basePrice *= (1 + (puissance - 5) * 0.1);
    
    if (autoForm.usage === 'professionnel') basePrice *= 1.3;
    
    const age = new Date().getFullYear() - parseInt(autoForm.annee);
    if (age > 10) basePrice *= 0.85;
    else if (age < 3) basePrice *= 1.15;
    
    const bonusMalus = parseInt(autoForm.bonusMalus) / 100;
    basePrice *= bonusMalus;
    
    const ageDriver = parseInt(autoForm.age);
    if (ageDriver < 25) basePrice *= 1.4;
    else if (ageDriver > 60) basePrice *= 1.2;
    
    const duration = parseInt(autoForm.duree);
    const finalPrice = (basePrice / 12) * duration;

    setQuote({
      type: 'auto',
      montantAnnuel: Math.round(basePrice),
      montantTotal: Math.round(finalPrice),
      duree: duration,
      formule: autoForm.formule,
      details: `${autoForm.marque} ${autoForm.modele} (${autoForm.annee})`,
      reduction: bonusMalus < 1 ? `${((1 - bonusMalus) * 100).toFixed(0)}% de bonus` : null
    });
    setCurrentPage('quote');
  };

  const calculateSanteQuote = () => {
    let basePrice = 0;
    switch (santeForm.formule) {
      case 'basique': basePrice = 60000; break;
      case 'intermediaire': basePrice = 120000; break;
      case 'premium': basePrice = 200000; break;
    }

    const nbBenef = parseInt(santeForm.nombreBeneficiaires) || 1;
    basePrice *= nbBenef * 0.8; // Réduction famille
    
    const age = parseInt(santeForm.ageAssure) || 30;
    if (age > 60) basePrice *= 1.5;
    else if (age < 25) basePrice *= 0.9;
    
    if (santeForm.maladiesChroniques === 'oui') basePrice *= 1.3;
    
    const duration = parseInt(santeForm.duree);
    const finalPrice = (basePrice / 12) * duration;

    setQuote({
      type: 'sante',
      montantAnnuel: Math.round(basePrice),
      montantTotal: Math.round(finalPrice),
      duree: duration,
      formule: santeForm.formule,
      details: `Couverture ${santeForm.typeCouverture} - ${nbBenef} bénéficiaire(s)`,
      reduction: nbBenef > 3 ? '15% réduction famille nombreuse' : null
    });
    setCurrentPage('quote');
  };

  const calculateHabitationQuote = () => {
    let basePrice = 0;
    switch (habitationForm.formule) {
      case 'basique': basePrice = 40000; break;
      case 'confort': basePrice = 75000; break;
      case 'premium': basePrice = 120000; break;
    }

    const superficie = parseInt(habitationForm.superficie) || 50;
    basePrice *= (1 + (superficie - 50) * 0.005);
    
    const valeur = parseInt(habitationForm.valeurBiens) || 5000000;
    basePrice *= (1 + (valeur / 10000000));
    
    if (habitationForm.zone === 'rurale') basePrice *= 0.85;
    if (habitationForm.systemeSecurite === 'oui') basePrice *= 0.9;
    
    const duration = parseInt(habitationForm.duree);
    const finalPrice = (basePrice / 12) * duration;

    setQuote({
      type: 'habitation',
      montantAnnuel: Math.round(basePrice),
      montantTotal: Math.round(finalPrice),
      duree: duration,
      formule: habitationForm.formule,
      details: `${habitationForm.typeLogement} - ${superficie}m²`,
      reduction: habitationForm.systemeSecurite === 'oui' ? '10% avec système de sécurité' : null
    });
    setCurrentPage('quote');
  };

  const calculateVoyageQuote = () => {
    let basePrice = 0;
    switch (voyageForm.formule) {
      case 'basique': basePrice = 25000; break;
      case 'confort': basePrice = 45000; break;
      case 'premium': basePrice = 75000; break;
    }

    const duree = parseInt(voyageForm.duree) || 7;
    basePrice *= (duree / 7);
    
    const nbVoyageurs = parseInt(voyageForm.nombreVoyageurs) || 1;
    basePrice *= nbVoyageurs;
    
    if (voyageForm.activitesRisque === 'oui') basePrice *= 1.4;
    
    const destination = voyageForm.destination.toLowerCase();
    if (destination.includes('europe') || destination.includes('usa')) basePrice *= 1.3;
    else if (destination.includes('afrique')) basePrice *= 0.9;

    setQuote({
      type: 'voyage',
      montantAnnuel: 0,
      montantTotal: Math.round(basePrice),
      duree: duree,
      formule: voyageForm.formule,
      details: `Voyage vers ${voyageForm.destination} - ${nbVoyageurs} voyageur(s)`,
      reduction: null
    });
    setCurrentPage('quote');
  };

  // Fonction chat IA
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          messages: [{
            role: 'user',
            content: `Tu es un assistant pour MAM ASSUR ET MULTI SERVICES en Côte d'Ivoire (dirigée par TOURE Mariam).

Produits et tarifs:
• ASSURANCE AUTO: Tiers simple (45k/an), Tiers complet (85k/an), Tous risques (150k/an)
• ASSURANCE SANTÉ: Basique (60k/an), Intermédiaire (120k/an), Premium (200k/an)
• ASSURANCE HABITATION: Basique (40k/an), Confort (75k/an), Premium (120k/an)
• ASSURANCE VOYAGE: Basique (25k), Confort (45k), Premium (75k)
• ACCESSOIRES: Extincteur (15k), Trousse secours (8k), Gilet (3.5k), Triangle (5k)

Paiement: Mobile Money (Orange, MTN, Moov), Virement bancaire, Carte bancaire

Réponds en français de manière chaleureuse et professionnelle.

Question: ${userMessage}`
          }]
        })
      });

      const data = await response.json();
      const assistantMessage = data.content.find(item => item.type === 'text')?.text || 
        'Désolé, erreur technique. Contactez-nous au +225 XX XX XX XX XX.';
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'Désolé, une erreur est survenue. Contactez-nous au +225 XX XX XX XX XX.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  // Fonction de génération PDF (simulation)
  const generatePDF = () => {
    alert('📄 Génération du devis PDF en cours...\n\nVotre devis sera téléchargé dans quelques secondes.\n\nContenu du PDF:\n- Informations client\n- Détails de la couverture\n- Tarification détaillée\n- Conditions générales\n- Modalités de paiement');
  };

  // Page d'accueil
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">MAM ASSUR ET MULTI SERVICES</h1>
              <p className="text-xl opacity-90">Votre partenaire assurance en Côte d'Ivoire</p>
              <p className="text-sm mt-2 opacity-75">Dirigée par TOURE Mariam</p>
            </div>
            <button 
              onClick={() => {
                setUserRole(userRole === 'client' ? 'admin' : 'client');
                setCurrentPage(userRole === 'client' ? 'admin-dashboard' : 'home');
              }}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg transition"
            >
              {userRole === 'client' ? '👤 Mode Admin' : '👥 Mode Client'}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Bienvenue sur StyleMatch 🎯</h2>
          <p className="text-gray-600 text-lg mb-6">
            Obtenez votre devis d'assurance en quelques clics ! Notre IA vous guide et vous recommande les meilleures options.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setChatOpen(true)}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
            >
              <MessageCircle size={20} />
              Discuter avec notre IA
            </button>
            <button 
              onClick={() => setCurrentPage('insurance-selection')}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center gap-2"
            >
              <Calculator size={20} />
              Obtenir un devis
            </button>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">Nos Assurances</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {insuranceTypes.map((insurance) => {
            const Icon = insurance.icon;
            return (
              <div 
                key={insurance.id}
                onClick={() => {
                  setSelectedInsurance(insurance.id);
                  setCurrentPage('insurance-selection');
                }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition cursor-pointer transform hover:scale-105"
              >
                <div className={`${insurance.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{insurance.name}</h4>
                <p className="text-gray-600 text-sm mb-4">{insurance.description}</p>
                <ul className="space-y-1">
                  {insurance.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <Check size={14} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-6">Accessoires Auto Recommandés</h3>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
          {accessories.map((accessory, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
              <div className="text-5xl mb-2 text-center">{accessory.image}</div>
              <h4 className="text-sm font-bold text-gray-800 mb-1 text-center">{accessory.name}</h4>
              <p className="text-blue-600 font-bold text-center text-xs mb-3">{accessory.price}</p>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:shadow-lg transition flex items-center justify-center gap-1 text-xs">
                <ShoppingCart size={14} />
                Ajouter
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Page de sélection d'assurance
  const InsuranceSelectionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('home')} className="text-white mb-4 hover:underline">
            ← Retour à l'accueil
          </button>
          <h1 className="text-3xl font-bold">Choisissez votre assurance</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {insuranceTypes.map((insurance) => {
            const Icon = insurance.icon;
            return (
              <div
                key={insurance.id}
                onClick={() => {
                  setSelectedInsurance(insurance.id);
                  setCurrentPage(`${insurance.id}-form`);
                }}
                className="bg-white rounded-xl shadow-lg p-8 cursor-pointer transform transition hover:shadow-2xl hover:scale-105"
              >
                <div className={`${insurance.color} w-20 h-20 rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{insurance.name}</h3>
                <p className="text-gray-600 mb-4">{insurance.description}</p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2">
                  Obtenir un devis <ChevronRight size={20} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  // Formulaire Auto (existant mais simplifié pour l'espace)
  const AutoFormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('insurance-selection')} className="text-white mb-4 hover:underline">← Retour</button>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Car size={36} />Assurance Auto</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Marque</label>
                <input type="text" value={autoForm.marque} onChange={(e) => setAutoForm({...autoForm, marque: e.target.value})}
                  placeholder="Toyota, Peugeot..." className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Modèle</label>
                <input type="text" value={autoForm.modele} onChange={(e) => setAutoForm({...autoForm, modele: e.target.value})}
                  placeholder="Corolla..." className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Année</label>
                <input type="number" value={autoForm.annee} onChange={(e) => setAutoForm({...autoForm, annee: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Puissance (CV)</label>
                <input type="number" value={autoForm.puissanceFiscale} onChange={(e) => setAutoForm({...autoForm, puissanceFiscale: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Usage</label>
                <select value={autoForm.usage} onChange={(e) => setAutoForm({...autoForm, usage: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option value="personnel">Personnel</option>
                  <option value="professionnel">Professionnel</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Formule</label>
              <div className="grid grid-cols-3 gap-4">
                {['tiers_simple', 'tiers_complet', 'tous_risques'].map((f) => (
                  <div key={f} onClick={() => setAutoForm({...autoForm, formule: f})}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${autoForm.formule === f ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
                    <div className="font-bold">{f.replace('_', ' ')}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Âge conducteur</label>
                <input type="number" value={autoForm.age} onChange={(e) => setAutoForm({...autoForm, age: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Ancienneté permis</label>
                <input type="number" value={autoForm.anciennetePermis} onChange={(e) => setAutoForm({...autoForm, anciennetePermis: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Bonus/Malus (%)</label>
                <input type="number" value={autoForm.bonusMalus} onChange={(e) => setAutoForm({...autoForm, bonusMalus: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <button onClick={calculateAutoQuote}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
              <Calculator className="inline mr-2" />Calculer mon devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Formulaire Santé
  const SanteFormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('insurance-selection')} className="text-white mb-4 hover:underline">← Retour</button>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Heart size={36} />Assurance Santé</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Type de couverture</label>
                <select value={santeForm.typeCouverture} onChange={(e) => setSanteForm({...santeForm, typeCouverture: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-red-500">
                  <option value="individuelle">Individuelle</option>
                  <option value="familiale">Familiale</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre de bénéficiaires</label>
                <input type="number" value={santeForm.nombreBeneficiaires} onChange={(e) => setSanteForm({...santeForm, nombreBeneficiaires: e.target.value})}
                  min="1" max="10" className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Âge de l'assuré principal</label>
                <input type="number" value={santeForm.ageAssure} onChange={(e) => setSanteForm({...santeForm, ageAssure: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Maladies chroniques existantes</label>
                <select value={santeForm.maladiesChroniques} onChange={(e) => setSanteForm({...santeForm, maladiesChroniques: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="non">Non</option>
                  <option value="oui">Oui</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Formule de couverture</label>
              <div className="grid grid-cols-3 gap-4">
                {['basique', 'intermediaire', 'premium'].map((f) => (
                  <div key={f} onClick={() => setSanteForm({...santeForm, formule: f})}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${santeForm.formule === f ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                    <div className="font-bold capitalize">{f}</div>
                    <div className="text-xs text-gray-600 mt-1">
                      {f === 'basique' ? 'Hospitalisation' : f === 'intermediaire' ? '+ Soins ambu.' : '+ Pharmacie'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={calculateSanteQuote}
              className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
              <Calculator className="inline mr-2" />Calculer mon devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Formulaire Habitation
  const HabitationFormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('insurance-selection')} className="text-white mb-4 hover:underline">← Retour</button>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Home size={36} />Assurance Habitation</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Type de logement</label>
                <select value={habitationForm.typeLogement} onChange={(e) => setHabitationForm({...habitationForm, typeLogement: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="appartement">Appartement</option>
                  <option value="maison">Maison</option>
                  <option value="villa">Villa</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Superficie (m²)</label>
                <input type="number" value={habitationForm.superficie} onChange={(e) => setHabitationForm({...habitationForm, superficie: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Valeur des biens (FCFA)</label>
                <input type="number" value={habitationForm.valeurBiens} onChange={(e) => setHabitationForm({...habitationForm, valeurBiens: e.target.value})}
                  placeholder="5000000" className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Zone</label>
                <select value={habitationForm.zone} onChange={(e) => setHabitationForm({...habitationForm, zone: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="urbaine">Urbaine</option>
                  <option value="rurale">Rurale</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Système de sécurité installé</label>
              <select value={habitationForm.systemeSecurite} onChange={(e) => setHabitationForm({...habitationForm, systemeSecurite: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg">
                <option value="non">Non</option>
                <option value="oui">Oui (alarme, caméras...)</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Formule</label>
              <div className="grid grid-cols-3 gap-4">
                {['basique', 'confort', 'premium'].map((f) => (
                  <div key={f} onClick={() => setHabitationForm({...habitationForm, formule: f})}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${habitationForm.formule === f ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                    <div className="font-bold capitalize">{f}</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={calculateHabitationQuote}
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
              <Calculator className="inline mr-2" />Calculer mon devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Formulaire Voyage
  const VoyageFormPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <button onClick={() => setCurrentPage('insurance-selection')} className="text-white mb-4 hover:underline">← Retour</button>
          <h1 className="text-3xl font-bold flex items-center gap-3"><Plane size={36} />Assurance Voyage</h1>
        </div>
      </header>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Destination</label>
                <input type="text" value={voyageForm.destination} onChange={(e) => setVoyageForm({...voyageForm, destination: e.target.value})}
                  placeholder="France, USA, Sénégal..." className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Durée (jours)</label>
                <input type="number" value={voyageForm.duree} onChange={(e) => setVoyageForm({...voyageForm, duree: e.target.value})}
                  placeholder="7" className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre de voyageurs</label>
                <input type="number" value={voyageForm.nombreVoyageurs} onChange={(e) => setVoyageForm({...voyageForm, nombreVoyageurs: e.target.value})}
                  min="1" className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Activités à risque</label>
                <select value={voyageForm.activitesRisque} onChange={(e) => setVoyageForm({...voyageForm, activitesRisque: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg">
                  <option value="non">Non (tourisme classique)</option>
                  <option value="oui">Oui (sports extrêmes...)</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Formule</label>
              <div className="grid grid-cols-3 gap-4">
                {['basique', 'confort', 'premium'].map((f) => (
                  <div key={f} onClick={() => setVoyageForm({...voyageForm, formule: f})}
                    className={`p-4 border-2 rounded-lg cursor-pointer ${voyageForm.formule === f ? 'border-purple-500 bg-purple-50' : 'border-gray-300'}`}>
                    <div className="font-bold capitalize">{f}</div>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={calculateVoyageQuote}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
              <Calculator className="inline mr-2" />Calculer mon devis
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Page de devis (améliorée)
  const QuotePage = () => {
    const typeNames = {
      auto: 'Assurance Auto',
      sante: 'Assurance Santé',
      habitation: 'Assurance Habitation',
      voyage: 'Assurance Voyage'
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Votre Devis Personnalisé</h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
              <div className="text-center mb-8">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-green-600" size={48} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Devis calculé avec succès !</h2>
                <p className="text-gray-600">{typeNames[quote.type]}</p>
              </div>

              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl p-6 mb-6">
                <div className="text-center">
                  <p className="text-lg mb-2">{quote.details}</p>
                  <p className="text-5xl font-bold mb-2">{quote.montantTotal.toLocaleString()} FCFA</p>
                  <p className="text-sm opacity-90">
                    {quote.type === 'voyage' ? 'Pour votre voyage' : `Pour ${quote.duree} mois de couverture`}
                  </p>
                  {quote.reduction && (
                    <div className="mt-4 bg-white bg-opacity-20 rounded-lg py-2 px-4 inline-block">
                      <p className="text-sm font-semibold">✨ {quote.reduction}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <button onClick={generatePDF}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-bold hover:bg-gray-300 transition flex items-center justify-center gap-2">
                  <Download size={20} />
                  Télécharger PDF
                </button>
                <button onClick={() => setCurrentPage('subscription')}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition flex items-center justify-center gap-2">
                  <FileText size={20} />
                  Souscrire
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Accessoires recommandés</h3>
              <div className="grid grid-cols-2 gap-4">
                {accessories.slice(0, 4).map((acc, idx) => (
                  <div key={idx} className="border rounded-lg p-3">
                    <div className="text-3xl text-center mb-2">{acc.image}</div>
                    <h4 className="font-semibold text-sm text-center">{acc.name}</h4>
                    <p className="text-blue-600 font-bold text-center text-sm">{acc.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Page de souscription avec paiement
  const SubscriptionPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Finaliser votre souscription</h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Vos informations</h2>
          
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nom</label>
                <input type="text" value={subscriptionData.nom} onChange={(e) => setSubscriptionData({...subscriptionData, nom: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Prénom(s)</label>
                <input type="text" value={subscriptionData.prenom} onChange={(e) => setSubscriptionData({...subscriptionData, prenom: e.target.value})}
                  className="w-full px-4 py-3 border rounded-lg" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Téléphone</label>
              <input type="tel" value={subscriptionData.telephone} onChange={(e) => setSubscriptionData({...subscriptionData, telephone: e.target.value})}
                placeholder="+225 XX XX XX XX XX" className="w-full px-4 py-3 border rounded-lg" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" value={subscriptionData.email} onChange={(e) => setSubscriptionData({...subscriptionData, email: e.target.value})}
                className="w-full px-4 py-3 border rounded-lg" />
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <CreditCard size={20} />
                Mode de paiement
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 border-2 border-blue-500 bg-white rounded-lg cursor-pointer">
                  <input type="radio" name="payment" defaultChecked />
                  <div>
                    <div className="font-semibold">Mobile Money</div>
                    <div className="text-sm text-gray-600">Orange Money, MTN Money, Moov Money</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <div>
                    <div className="font-semibold">Virement bancaire</div>
                    <div className="text-sm text-gray-600">Transfert direct sur notre compte</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:border-blue-500">
                  <input type="radio" name="payment" />
                  <div>
                    <div className="font-semibold">Carte bancaire</div>
                    <div className="text-sm text-gray-600">Visa, Mastercard</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">Montant à payer</span>
                <span className="text-3xl font-bold">{quote?.montantTotal.toLocaleString()} FCFA</span>
              </div>
              <p className="text-sm opacity-90">Paiement sécurisé</p>
            </div>

            <button onClick={() => {
              alert('✅ Souscription validée !\n\nVous recevrez un SMS et un email de confirmation.\n\nUn conseiller vous contactera dans les 24h pour finaliser votre dossier.\n\nMerci de votre confiance ! 🙏');
              setCurrentPage('home');
            }}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition">
              <Check className="inline mr-2" size={24} />
              Valider et Payer
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Admin
  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Administrateur</h1>
              <p className="text-sm opacity-75">MAM ASSUR - Gestion des devis et souscriptions</p>
            </div>
            <button onClick={() => { setUserRole('client'); setCurrentPage('home'); }}
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
              👥 Mode Client
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Statistiques */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <FileText className="text-blue-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-semibold">+12%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">24</h3>
            <p className="text-gray-600">Devis ce mois</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Check className="text-green-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-semibold">+8%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">18</h3>
            <p className="text-gray-600">Souscriptions</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <DollarSign className="text-purple-600" size={24} />
              </div>
              <span className="text-green-600 text-sm font-semibold">+15%</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">2,4M</h3>
            <p className="text-gray-600">Revenus (FCFA)</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <Clock className="text-orange-600" size={24} />
              </div>
              <span className="text-orange-600 text-sm font-semibold">En attente</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-1">6</h3>
            <p className="text-gray-600">À traiter</p>
          </div>
        </div>

        {/* Liste des devis */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Devis récents</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">ID</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Client</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Type</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Montant</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {savedQuotes.map((devis) => (
                  <tr key={devis.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">#{devis.id}</td>
                    <td className="py-3 px-4 font-semibold">{devis.client}</td>
                    <td className="py-3 px-4">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                        {devis.type}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-bold text-gray-800">{devis.montant.toLocaleString()} FCFA</td>
                    <td className="py-3 px-4 text-gray-600">{devis.date}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        devis.statut === 'En attente' ? 'bg-yellow-100 text-yellow-700' :
                        devis.statut === 'Approuvé' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {devis.statut}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-blue-600 hover:text-blue-800 mr-3">Voir</button>
                      <button className="text-green-600 hover:text-green-800">Approuver</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Chatbot
  const ChatBot = () => (
    <>
      {!chatOpen && (
        <button onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition flex items-center justify-center z-50">
          <MessageCircle size={28} />
        </button>
      )}

      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="text-green-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold">Assistant MAM ASSUR</h3>
                <p className="text-xs opacity-90">En ligne</p>
              </div>
            </div>
            <button onClick={() => setChatOpen(false)} className="hover:bg-white hover:bg-opacity-20 p-2 rounded-lg">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-white text-gray-800 shadow-md'
                }`}>
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white shadow-md rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleChatSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)}
                placeholder="Posez votre question..." className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" />
              <button type="submit" className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg">
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );

  return (
    <div className="font-sans">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'insurance-selection' && <InsuranceSelectionPage />}
      {currentPage === 'auto-form' && <AutoFormPage />}
      {currentPage === 'sante-form' && <SanteFormPage />}
      {currentPage === 'habitation-form' && <HabitationFormPage />}
      {currentPage === 'voyage-form' && <VoyageFormPage />}
      {currentPage === 'quote' && <QuotePage />}
      {currentPage === 'subscription' && <SubscriptionPage />}
      {currentPage === 'admin-dashboard' && <AdminDashboard />}
      {currentPage !== 'admin-dashboard' && <ChatBot />}
    </div>
  );
};

export default StyleMatchAppComplete;
