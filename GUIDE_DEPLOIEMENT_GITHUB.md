# 📘 GUIDE COMPLET : Héberger StyleMatch sur GitHub Pages

## 🎯 Objectif
Publier votre site web StyleMatch gratuitement sur GitHub Pages en moins de 15 minutes.

---

## ✅ Ce dont vous avez besoin

1. ✅ Un compte GitHub (gratuit)
2. ✅ Les fichiers du projet (que vous avez déjà !)
3. ✅ Un navigateur web
4. ✅ 15 minutes de votre temps

**Aucune compétence technique requise !**

---

## 📋 ÉTAPE 1 : Créer un Compte GitHub

### Si vous n'avez PAS encore de compte GitHub :

1. Allez sur **https://github.com**
2. Cliquez sur **"Sign up"** (en haut à droite)
3. Remplissez le formulaire :
   - **Email** : Votre adresse email professionnelle
   - **Password** : Un mot de passe sécurisé
   - **Username** : Choisissez un nom (ex: `mamassur-ci`, `toure-mariam`, etc.)
     - ⚠️ **Important** : Notez bien ce nom d'utilisateur !
4. Vérifiez votre email
5. Connectez-vous à GitHub

### Si vous AVEZ déjà un compte :

1. Allez sur **https://github.com**
2. Cliquez sur **"Sign in"**
3. Entrez vos identifiants

---

## 📦 ÉTAPE 2 : Créer un Nouveau Dépôt (Repository)

Un "repository" (ou dépôt) est comme un dossier en ligne pour votre projet.

### Instructions détaillées :

1. Une fois connecté, en haut à droite, cliquez sur le **symbole "+"**
2. Sélectionnez **"New repository"**

3. **Remplissez le formulaire** :

   ```
   Repository name: stylematch-mam-assur
   
   Description: Plateforme d'assurance intelligente - MAM ASSUR ET MULTI SERVICES
   
   Visibilité: ○ Public  (IMPORTANT : cochez Public pour GitHub Pages gratuit)
              ○ Private
   
   ☑ Add a README file (cochez cette case)
   
   Add .gitignore: None (laissez vide pour l'instant)
   
   Choose a license: None (laissez vide)
   ```

4. Cliquez sur le bouton vert **"Create repository"**

🎉 **Félicitations !** Votre dépôt est créé !

---

## 📤 ÉTAPE 3 : Téléverser les Fichiers

Maintenant, nous allons mettre vos fichiers en ligne.

### Liste des fichiers à téléverser :

✅ **OBLIGATOIRES** :
- `index.html`
- `app.jsx`

✅ **RECOMMANDÉS** :
- `package.json`
- `.gitignore`
- `README_GITHUB.md` (renommer en `README.md` après upload)

✅ **OPTIONNELS** (documents marketing) :
- `brochure_mam_assur.pdf`
- `guide_utilisateur_stylematch.docx`
- `presentation_partenaires.pdf`

### Comment téléverser :

1. Dans votre repository, cliquez sur **"Add file"** (bouton en haut)
2. Sélectionnez **"Upload files"**

3. **Glissez-déposez** tous les fichiers dans la zone prévue
   - Ou cliquez sur **"choose your files"** pour les sélectionner

4. Attendez que tous les fichiers se téléversent (barre de progression verte)

5. En bas de la page, dans **"Commit changes"** :
   ```
   Commit message: Initial commit - StyleMatch v1.0
   
   Extended description: (optionnel)
   Première version de la plateforme StyleMatch avec :
   - Interface complète pour 4 types d'assurance
   - Chatbot IA intégré
   - Dashboard administrateur
   - Système de paiement
   ```

6. Cliquez sur le bouton vert **"Commit changes"**

⏰ **Patience** : Le téléversement peut prendre 1-2 minutes selon votre connexion.

---

## 🌐 ÉTAPE 4 : Activer GitHub Pages

C'est ici que la magie opère ! Nous allons transformer vos fichiers en un site web accessible en ligne.

### Instructions détaillées :

1. Dans votre repository, cliquez sur **"Settings"** (⚙️ icône en haut)

2. Dans le menu de gauche, cherchez et cliquez sur **"Pages"**
   - C'est dans la section "Code and automation"

3. Dans la section **"Source"** :
   ```
   Source: Deploy from a branch
   ```

4. Dans la section **"Branch"** :
   ```
   Branch: main  ▼     / (root)  ▼
   ```
   - Premier menu déroulant : sélectionnez **"main"**
   - Deuxième menu déroulant : sélectionnez **"/ (root)"**

5. Cliquez sur le bouton **"Save"**

6. **ATTENDEZ 1-2 MINUTES** ⏰
   - GitHub construit votre site en arrière-plan
   - Rafraîchissez la page après 1-2 minutes

7. Un encadré vert apparaîtra avec le message :
   ```
   ✅ Your site is live at https://VOTRE-USERNAME.github.io/stylematch-mam-assur/
   ```

🎉 **C'EST EN LIGNE !** Cliquez sur le lien pour voir votre site !

---

## 🔍 ÉTAPE 5 : Vérifier que Tout Fonctionne

### Checklist de vérification :

Ouvrez votre site : `https://VOTRE-USERNAME.github.io/stylematch-mam-assur/`

✅ **Page d'accueil** :
- [ ] Le titre "MAM ASSUR ET MULTI SERVICES" s'affiche
- [ ] Les 4 cartes d'assurance (Auto, Santé, Habitation, Voyage) sont visibles
- [ ] Les couleurs et le design sont corrects

✅ **Navigation** :
- [ ] Cliquer sur "Obtenir un devis" fonctionne
- [ ] Les formulaires d'assurance s'affichent
- [ ] Le bouton "Calculer mon devis" fonctionne

✅ **Chatbot** :
- [ ] Le bouton vert en bas à droite est visible
- [ ] En cliquant dessus, la fenêtre de chat s'ouvre
- [ ] ⚠️ Le chatbot peut ne PAS répondre si vous n'avez pas configuré l'API Anthropic (c'est normal au début)

✅ **Responsive** :
- [ ] Ouvrez le site sur votre téléphone → Il devrait s'adapter automatiquement

### Si quelque chose ne fonctionne pas :

1. **Vérifiez l'URL** : Elle doit se terminer par `/` (slash)
   - ✅ Correct : `https://username.github.io/stylematch-mam-assur/`
   - ❌ Incorrect : `https://username.github.io/stylematch-mam-assur`

2. **Attendez un peu plus** : Parfois GitHub Pages prend 5-10 minutes

3. **Videz le cache** de votre navigateur :
   - **Windows** : Ctrl + F5
   - **Mac** : Cmd + Shift + R

4. **Vérifiez les fichiers** :
   - Retournez dans votre repository
   - Assurez-vous que `index.html` et `app.jsx` sont bien là

---

## 🎨 ÉTAPE 6 : Personnaliser (Optionnel)

### Changer le nom du site :

1. Dans votre repository, cliquez sur **"Settings"**
2. Tout en haut, changez le **"Repository name"**
3. Cliquez sur **"Rename"**
4. ⚠️ L'URL changera : `https://username.github.io/NOUVEAU-NOM/`

### Ajouter un domaine personnalisé :

Si vous avez un domaine (ex: `www.mamassur.ci`) :

1. Dans **"Settings" > "Pages"**
2. Section **"Custom domain"**
3. Entrez : `www.mamassur.ci`
4. Cliquez sur **"Save"**
5. Configurez votre DNS (instructions détaillées fournies par GitHub)

---

## 🔄 ÉTAPE 7 : Faire des Modifications

Vous voulez changer quelque chose sur votre site ? Voici comment :

### Méthode simple (via l'interface GitHub) :

1. Allez dans votre repository
2. Cliquez sur le fichier que vous voulez modifier (ex: `app.jsx`)
3. Cliquez sur l'icône ✏️ **"Edit"** (en haut à droite)
4. Faites vos modifications
5. En bas, **"Commit changes"** :
   ```
   Commit message: Modification des tarifs
   ```
6. Cliquez sur **"Commit changes"**
7. Attendez 1-2 minutes → Les changements apparaîtront sur votre site

### Exemples de modifications courantes :

#### Changer le numéro de téléphone :

1. Ouvrez `app.jsx`
2. Cherchez (Ctrl+F) : `+225 XX XX XX XX XX`
3. Remplacez par votre vrai numéro : `+225 07 XX XX XX XX`
4. Commit

#### Changer les tarifs :

1. Ouvrez `app.jsx`
2. Cherchez : `case 'tiers_simple': basePrice = 45000;`
3. Modifiez le nombre : `basePrice = 50000;` (par exemple)
4. Commit

---

## 📊 ÉTAPE 8 : Suivre les Visiteurs (Optionnel)

### Ajouter Google Analytics :

1. Créez un compte **Google Analytics** (gratuit)
2. Obtenez votre **Measurement ID** (format : `G-XXXXXXXXXX`)
3. Dans votre repository, ouvrez `index.html`
4. Remplacez `GA_MEASUREMENT_ID` par votre vrai ID :
   ```html
   gtag('config', 'VOTRE-VRAI-ID');
   ```
5. Commit

Maintenant vous pourrez voir :
- Combien de personnes visitent votre site
- D'où elles viennent
- Quelles pages elles consultent
- Combien de temps elles restent

---

## 🔐 ÉTAPE 9 : Configurer l'API du Chatbot (Optionnel)

Pour que le chatbot fonctionne, vous devez obtenir une clé API Anthropic.

### Comment obtenir une clé API :

1. Allez sur **https://console.anthropic.com**
2. Créez un compte (avec votre email)
3. Allez dans **"API Keys"**
4. Cliquez sur **"Create Key"**
5. Donnez-lui un nom : `StyleMatch Production`
6. Copiez la clé (commence par `sk-ant-...`)
7. ⚠️ **IMPORTANT** : Ne partagez JAMAIS cette clé !

### Ajouter la clé dans votre code :

**OPTION FACILE (mais moins sécurisée)** :

⚠️ Cette méthode expose votre clé API dans le code source. À utiliser uniquement pour les tests.

1. Créez un nouveau fichier `config.js` :
   ```javascript
   const CONFIG = {
     ANTHROPIC_API_KEY: 'sk-ant-votre-clé-ici'
   };
   ```

2. Dans `app.jsx`, importez la config :
   ```javascript
   // En haut du fichier
   import CONFIG from './config.js';
   
   // Dans la fonction handleChatSubmit
   headers: {
     'x-api-key': CONFIG.ANTHROPIC_API_KEY,
     // ...
   }
   ```

**OPTION SÉCURISÉE (recommandée pour la production)** :

Utilisez un backend (serveur) qui fait les appels API. Cela cache votre clé API.

---

## 🆘 RÉSOLUTION DES PROBLÈMES COURANTS

### Problème 1 : "404 - Page Not Found"

**Causes possibles** :
- L'URL est incorrecte
- GitHub Pages n'est pas activé
- Les fichiers n'ont pas été uploadés

**Solutions** :
1. Vérifiez l'URL : doit contenir votre username et le nom du repo
2. Retournez dans Settings > Pages et vérifiez que c'est activé
3. Assurez-vous que `index.html` est bien à la racine du repo

### Problème 2 : "La page est blanche"

**Causes possibles** :
- Erreur JavaScript
- Fichier `app.jsx` manquant ou mal nommé

**Solutions** :
1. Ouvrez la console du navigateur (F12) pour voir les erreurs
2. Vérifiez que `app.jsx` est bien uploadé
3. Vérifiez que dans `index.html`, la ligne `<script src="app.jsx">` est correcte

### Problème 3 : "Le chatbot ne répond pas"

**Cause** :
- Clé API Anthropic non configurée (c'est normal !)

**Solution** :
- Suivez l'ÉTAPE 9 pour configurer l'API
- Ou laissez le chatbot désactivé temporairement

### Problème 4 : "Les styles ne s'affichent pas"

**Cause** :
- Tailwind CSS CDN non chargé

**Solution** :
1. Vérifiez votre connexion internet
2. Dans `index.html`, assurez-vous que cette ligne est présente :
   ```html
   <script src="https://cdn.tailwindcss.com"></script>
   ```

### Problème 5 : "Je ne peux pas modifier les fichiers"

**Cause** :
- Permissions insuffisantes (si c'est un repository d'équipe)

**Solution** :
1. Vérifiez que c'est bien VOTRE repository
2. Si c'est un fork, assurez-vous d'avoir les droits

---

## 📞 BESOIN D'AIDE ?

### Support Technique

- 📧 **Email** : dev@mamassur.ci
- 📱 **Téléphone** : +225 XX XX XX XX XX
- 💬 **GitHub Issues** : https://github.com/VOTRE-USERNAME/stylematch-mam-assur/issues

### Ressources Utiles

- 📖 **Documentation GitHub Pages** : https://docs.github.com/pages
- 🎓 **Tutoriels YouTube** : Cherchez "GitHub Pages tutorial français"
- 💡 **Stack Overflow** : Pour les questions techniques

---

## ✅ CHECKLIST FINALE

Avant de partager votre site, vérifiez :

- [ ] Le site est accessible à l'URL GitHub Pages
- [ ] Toutes les pages fonctionnent (accueil, formulaires, devis)
- [ ] Les informations de contact sont correctes
- [ ] Les tarifs affichés sont corrects
- [ ] Le design s'affiche bien sur mobile et desktop
- [ ] Vous avez sauvegardé vos fichiers localement (backup)
- [ ] Vous avez noté l'URL de votre site

---

## 🎉 FÉLICITATIONS !

Votre site StyleMatch est maintenant en ligne et accessible au monde entier !

**Prochaines étapes :**

1. ✅ Partagez l'URL avec vos clients
2. ✅ Ajoutez l'URL sur vos cartes de visite
3. ✅ Référencez le site sur Google (Google Search Console)
4. ✅ Créez des pages Facebook/Instagram avec le lien
5. ✅ Suivez les statistiques avec Google Analytics

---

**MAM ASSUR ET MULTI SERVICES**  
Protection • Confiance • Excellence

🛡️
