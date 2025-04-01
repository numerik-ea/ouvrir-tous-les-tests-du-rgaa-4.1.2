# ouvrir-et-fermer-tous-les-tests-du-rgaa-4.1.2

## Bookmarklets (marque-pages/favoris scriptés)
### Ouvrir tous les tests du RGAA
```javascript
javascript:document.querySelectorAll('.fr-accordion__btn').forEach(element => element.setAttribute('aria-expanded', 'true'));
```
### Fermer tous les tests du RGAA (note : recharger la page est plus rapide)
```javascript
javascript:document.querySelectorAll('.fr-accordion__btn').forEach(element => element.setAttribute('aria-expanded', 'false'));
```

## Extension navigateur qui ajoute un bouton "Ouvrir/Fermer tous les tests" en haut de la page des critères et tests du RGAA

<img width="407" alt="screenshot-bouton-ouvrir-les-tests-du-rgaa" src="https://github.com/user-attachments/assets/e1af28aa-9d4d-43a2-8e28-0ec6661f78fa">

### Installation de l'extension dans Chrome

- [Télécharger l'extension zippée](https://github.com/florentroques/ouvrir-et-fermer-tous-les-tests-du-rgaa/releases/download/v1.0.0/ouvrir-et-fermer-tous-les-tests-du-rgaa-v1.0.0-chrome.zip)
- Dézipper le fichier
- Aller sur `chrome://extensions`
- Activer le mode développeur
- Cliquer sur "Charger l'extension non empaquetée"
- Choisir le dossier dézippé contenant le code de l'extension

### Installation de l'extension dans Firefox
- [Télécharger l'extension au format "zip compatible avec Firefox"](https://github.com/florentroques/ouvrir-et-fermer-tous-les-tests-du-rgaa/releases/download/v1.0.0/ouvrir_et_fermer_tous_les_tests_du_rgaa-1.0.0-firefox.zip)
- Aller sur `about:debugging#/runtime/this-firefox`
- Cliquer sur "Charger un module complémentaire temporaire…"
- Sélectionner le fichier zip

---

### Méthode pour générer le fichier d'extension pour Firefox

#### 1. Installer web-ext pour créer le fichier zip contenant le code de l'extension

##### Mac (homebrew doit être installé au préalable)
```bash
brew install web-ext
```

##### Windows
Etape 1 (chocolatey doit être installé au préalable)
```bash
choco install nodejs-lts
```
Etape 2
```bash
npm install --global web-ext
```

#### 2. Créer le package de l'extension
A l'intérieur du dossier contenant le code de l'extension, lancer :
```bash
web-ext build -o
```
```bash
# -o permet d'écraser le fichier zip déjà existant
```
NB : Pour Windows, lancer `web-ext build -o` depuis cmd et non powershell
