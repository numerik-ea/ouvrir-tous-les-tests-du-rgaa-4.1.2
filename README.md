# ouvrir-et-fermer-tous-les-tests-du-rgaa

## Scripts à mettre en favori
### Ouvrir tous les tests du RGAA
```javascript
javascript:document.querySelectorAll('.fr-accordion__btn').forEach(element => element.setAttribute('aria-expanded', 'true'));
```
### Fermer tous les tests du RGAA (recharger la page est plus rapide)
```javascript
javascript:document.querySelectorAll('.fr-accordion__btn').forEach(element => element.setAttribute('aria-expanded', 'false'));
```

## Extension navigateur qui ajoute un bouton "Ouvrir/Fermer tous les tests" en haut de la page des critères et tests du RGAA

### Installation de l'extension dans Chrome

- Aller sur `chrome://extensions`
- Activer le mode développeur
- Cliquer sur "Charger l'extension non empaquetée"
- Choisir le dossier contenant le code de l'extension

### Instructions pour Firefox

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
NB : Pour windows, lancer `web-ext build -o` depuis cmd et non powershell

#### 3. Installer l'extension
- Aller sur `about:debugging#/runtime/this-firefox`
- Cliquer sur "Charger un module complémentaire temporaire…"
- Sélectionner le fichier zip généré par web-ext contenant le code de l'extension dans le dossier `web-ext-artifacts`
