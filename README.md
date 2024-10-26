# toggle-all-rgaa-tests-button

## Installer web-ext pour créer le fichier zip contenant le code de l'extension

### Mac
```bash
brew install web-ext
```

### Windows
Etape 1 (chocolatey doit être installé au préalable)
```bash
choco install nodejs-lts
```
Etape 2
```bash
npm install --global web-ext
```

## Créer le package de l'extension
A l'intérieur du dossier contenant le code de l'extension, lancer :
```bash
web-ext build -o
```
```bash
# -o permet d'écraser le fichier zip déjà existant
```
NB : Pour windows, lancer `web-ext build -o` depuis cmd et non powershell
