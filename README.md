# 🚀 StyleMatch - Plateforme d'Assurance IA

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![React](https://img.shields.io/badge/React-18-61dafb.svg)
![AI](https://img.shields.io/badge/AI-Claude%20Sonnet%204.5-purple.svg)

> Plateforme digitale innovante d'assurance pour **MAM ASSUR ET MULTI SERVICES** en Côte d'Ivoire, dirigée par **TOURE Mariam**.

## 📋 Table des Matières

- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités)
- [Démo en Ligne](#-démo-en-ligne)
- [Installation Locale](#-installation-locale)
- [Déploiement sur GitHub Pages](#-déploiement-sur-github-pages)
- [Configuration](#-configuration)
- [Technologies](#-technologies)
- [Documentation](#-documentation)
- [Support](#-support)
- [Licence](#-licence)

---

## 🎯 Aperçu

**StyleMatch** révolutionne l'expérience d'assurance en Côte d'Ivoire en combinant intelligence artificielle et expertise métier. Notre plateforme permet aux clients d'obtenir des devis personnalisés en quelques minutes au lieu de plusieurs jours.

### Points Forts

- ✅ **Devis instantanés** pour Auto, Santé, Habitation, Voyage
- ✅ **Chatbot IA 24/7** propulsé par Claude Sonnet 4.5
- ✅ **Paiement intégré** : Mobile Money, Carte bancaire, Virement
- ✅ **Dashboard Admin** avec analytics en temps réel
- ✅ **100% en ligne** - Pas besoin de se déplacer

---

## ✨ Fonctionnalités

### Pour les Clients

#### 🚗 Assurance Auto
- Tarification basée sur marque, modèle, puissance, usage
- Trois formules : Tiers simple, Tiers complet, Tous risques
- À partir de **45 000 FCFA/an**

#### ❤️ Assurance Santé
- Couverture individuelle ou familiale
- Formules Basique, Intermédiaire, Premium
- Réductions famille nombreuse jusqu'à **15%**

#### 🏠 Assurance Habitation
- Protection incendie, vol, dégâts des eaux
- Réduction **-10%** avec système de sécurité
- À partir de **40 000 FCFA/an**

#### ✈️ Assurance Voyage
- Annulation, rapatriement, bagages
- Couverture internationale
- À partir de **25 000 FCFA**

### Pour les Administrateurs

- 📊 **Statistiques** : Devis, conversions, revenus
- 📝 **Gestion** : Approuver, suivre, exporter
- 📈 **Analytics** : Tendances et KPIs
- 👥 **Clients** : Base de données complète

### Intelligence Artificielle

- 🤖 **Assistant virtuel** Claude Sonnet 4.5
- 💬 **Disponibilité** 24/7
- 🎯 **Recommandations** personnalisées
- 📊 **Analyse** des besoins clients

---

## 🌐 Démo en Ligne

### Accès Direct
**URL** : [https://VOTRE-USERNAME.github.io/stylematch-mam-assur](https://VOTRE-USERNAME.github.io/stylematch-mam-assur)

### Comptes de Test

**Mode Client** (par défaut)
- Accès direct à toutes les fonctionnalités
- Création de devis
- Souscription en ligne

**Mode Admin**
- Cliquez sur "Mode Admin" en haut à droite
- Visualisez le dashboard et les statistiques

---

## 💻 Installation Locale

### Prérequis

- Navigateur moderne (Chrome, Firefox, Safari, Edge)
- Git installé
- (Optionnel) Node.js pour le serveur de développement

### Étapes d'Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/VOTRE-USERNAME/stylematch-mam-assur.git
cd stylematch-mam-assur

# 2. Ouvrir directement dans le navigateur
# Option A : Double-cliquer sur index.html
# Option B : Utiliser un serveur local (recommandé)

# Avec Python
python -m http.server 3000

# Avec Node.js
npx http-server -p 3000

# Avec PHP
php -S localhost:3000

# 3. Accéder à l'application
# Ouvrir http://localhost:3000 dans votre navigateur
```

---

## 🚀 Déploiement sur GitHub Pages

### Méthode 1 : Via GitHub Interface (Recommandé pour débutants)

1. **Créer un compte GitHub** (si vous n'en avez pas)
   - Allez sur [github.com](https://github.com)
   - Cliquez sur "Sign up"

2. **Créer un nouveau dépôt**
   - Cliquez sur le bouton "New" (en vert)
   - Nom du dépôt : `stylematch-mam-assur`
   - Description : "Plateforme d'assurance IA - MAM ASSUR"
   - Visibilité : **Public** (pour GitHub Pages gratuit)
   - ✅ Cochez "Add a README file"
   - Cliquez sur "Create repository"

3. **Téléverser les fichiers**
   - Dans votre dépôt, cliquez sur "Add file" > "Upload files"
   - Glissez-déposez TOUS les fichiers :
     - `index.html`
     - `app.jsx`
     - `package.json`
     - `.gitignore`
     - `README.md`
     - Les fichiers PDF et DOCX
   - Écrivez un message : "Initial commit - StyleMatch v1.0"
   - Cliquez sur "Commit changes"

4. **Activer GitHub Pages**
   - Allez dans "Settings" (⚙️ en haut)
   - Dans le menu latéral, cliquez sur "Pages"
   - Source : Sélectionnez **"Deploy from a branch"**
   - Branch : Sélectionnez **"main"** et **"/ (root)"**
   - Cliquez sur "Save"
   - ⏰ Attendez 1-2 minutes

5. **Accéder à votre site**
   - GitHub affichera l'URL : `https://VOTRE-USERNAME.github.io/stylematch-mam-assur`
   - Cliquez sur le lien pour voir votre site en ligne ! 🎉

### Méthode 2 : Via Ligne de Commande (Pour utilisateurs avancés)

```bash
# 1. Initialiser Git dans votre dossier local
cd /chemin/vers/vos/fichiers
git init

# 2. Ajouter tous les fichiers
git add .

# 3. Créer le premier commit
git commit -m "Initial commit - StyleMatch v1.0"

# 4. Ajouter le dépôt distant (remplacez VOTRE-USERNAME)
git remote add origin https://github.com/VOTRE-USERNAME/stylematch-mam-assur.git

# 5. Pousser vers GitHub
git branch -M main
git push -u origin main

# 6. Activer GitHub Pages (via l'interface web comme décrit ci-dessus)
```

### Méthode 3 : Déploiement Automatique

```bash
# Installer gh-pages
npm install gh-pages --save-dev

# Ajouter dans package.json (déjà configuré)
"scripts": {
  "deploy": "gh-pages -d ."
}

# Déployer
npm run deploy
```

---

## ⚙️ Configuration

### Variables d'Environnement

Pour utiliser toutes les fonctionnalités, créez un fichier `config.js` :

```javascript
// config.js
const CONFIG = {
  // API Anthropic (pour le chatbot)
  ANTHROPIC_API_KEY: 'votre_clé_api_anthropic',
  
  // Paiement Mobile Money (optionnel au début)
  ORANGE_MONEY_API: 'votre_clé_orange_money',
  MTN_MONEY_API: 'votre_clé_mtn_money',
  
  // Google Analytics (optionnel)
  GA_MEASUREMENT_ID: 'G-XXXXXXXXXX',
  
  // Contact
  CONTACT_EMAIL: 'contact@mamassur.ci',
  CONTACT_PHONE: '+225 XX XX XX XX XX',
};

export default CONFIG;
```

⚠️ **Important** : Ne commitez JAMAIS ce fichier avec vos vraies clés API !

### Obtenir une Clé API Anthropic

1. Allez sur [console.anthropic.com](https://console.anthropic.com)
2. Créez un compte ou connectez-vous
3. Allez dans "API Keys"
4. Cliquez sur "Create Key"
5. Copiez la clé et ajoutez-la dans votre `config.js`

💡 **Pour commencer** : L'application fonctionne sans API, mais le chatbot sera désactivé.

---

## 🛠️ Technologies

### Frontend
- **React 18** - Framework UI
- **Tailwind CSS** - Styling moderne
- **Lucide React** - Icônes élégantes
- **Babel Standalone** - Compilation JSX

### Backend / Services
- **Anthropic Claude API** - Intelligence artificielle
- **Mobile Money APIs** - Paiements (Orange, MTN, Moov)
- **GitHub Pages** - Hébergement gratuit

### Outils
- **Git** - Contrôle de version
- **GitHub** - Repository et CI/CD
- **ReportLab** - Génération PDF (Python)

---

## 📚 Documentation

### Fichiers Inclus

- 📄 **brochure_mam_assur.pdf** - Brochure commerciale
- 📖 **guide_utilisateur_stylematch.docx** - Guide utilisateur complet
- 🤝 **presentation_partenaires.pdf** - Dossier partenariats
- 💻 **README.md** - Documentation technique (ce fichier)

### Structure du Projet

```
stylematch-mam-assur/
├── index.html                          # Point d'entrée HTML
├── app.jsx                             # Application React principale
├── package.json                        # Configuration npm
├── .gitignore                          # Fichiers à ignorer
├── README.md                           # Documentation
├── brochure_mam_assur.pdf             # Brochure commerciale
├── guide_utilisateur_stylematch.docx  # Guide utilisateur
└── presentation_partenaires.pdf       # Présentation partenaires
```

---

## 🎨 Personnalisation

### Modifier les Couleurs

Dans `app.jsx`, modifiez les couleurs Tailwind :

```javascript
// Couleurs principales
const colors = {
  auto: 'bg-blue-500',      // Assurance auto
  sante: 'bg-red-500',      // Assurance santé
  habitation: 'bg-green-500', // Assurance habitation
  voyage: 'bg-purple-500',  // Assurance voyage
};
```

### Ajuster les Tarifs

Modifiez les tarifs de base dans les fonctions de calcul :

```javascript
// Exemple pour l'assurance auto
const calculateAutoQuote = () => {
  let basePrice = 0;
  switch (autoForm.formule) {
    case 'tiers_simple': basePrice = 45000; break;  // ← Modifier ici
    case 'tiers_complet': basePrice = 85000; break; // ← Modifier ici
    case 'tous_risques': basePrice = 150000; break; // ← Modifier ici
  }
  // ...
};
```

---

## 📞 Support

### Pour les Clients

- 📧 **Email** : contact@mamassur.ci
- 📱 **Téléphone** : +225 XX XX XX XX XX
- 🌐 **Site Web** : www.mamassur.ci
- ⏰ **Horaires** : Lun-Ven 8h-18h, Sam 8h-13h

### Pour les Développeurs

- 💬 **Issues GitHub** : [Créer un issue](https://github.com/VOTRE-USERNAME/stylematch-mam-assur/issues)
- 📧 **Email technique** : dev@mamassur.ci
- 📖 **Documentation** : docs.mamassur.ci

---

## 🔄 Mises à Jour

Pour mettre à jour le site après modifications :

```bash
# 1. Modifier vos fichiers localement

# 2. Ajouter les modifications
git add .

# 3. Créer un commit
git commit -m "Description de vos modifications"

# 4. Pousser vers GitHub
git push

# 5. GitHub Pages se mettra à jour automatiquement (1-2 minutes)
```

---

## 🗺️ Roadmap

### Version 1.1 (Q2 2026)
- [ ] Application mobile native (iOS & Android)
- [ ] Notifications push
- [ ] Mode hors ligne
- [ ] Signature électronique

### Version 1.2 (Q3 2026)
- [ ] Assurance entreprise
- [ ] Programme de parrainage
- [ ] Intégration blockchain
- [ ] Chatbot vocal

### Version 2.0 (Q4 2026)
- [ ] IA prédictive anti-fraude
- [ ] Réalité augmentée
- [ ] API publique pour partenaires
- [ ] Multi-devises (FCFA, EUR, USD)

---

## 📄 Licence

Copyright © 2026 **MAM ASSUR ET MULTI SERVICES**. Tous droits réservés.

Ce logiciel est propriétaire et confidentiel. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite sans l'autorisation écrite de MAM ASSUR ET MULTI SERVICES.

---

## 👥 Équipe

**Fondatrice & Directrice Générale**  
TOURE Mariam

**Développement**  
Équipe Technique MAM ASSUR

**Design & UX**  
Équipe Créative MAM ASSUR

---

## 🙏 Remerciements

Merci à tous nos clients, partenaires et utilisateurs qui nous font confiance pour protéger ce qui compte le plus pour eux.

---

## ⭐ Contribuer

Nous accueillons les contributions ! Pour contribuer :

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Commitez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Poussez vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

---

<div align="center">

**MAM ASSUR ET MULTI SERVICES**

Protection • Confiance • Excellence

🛡️

[Site Web](https://mamassur.ci) • [Facebook](#) • [Instagram](#) • [LinkedIn](#)

</div>
