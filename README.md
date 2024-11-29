
# Composant Dropdown - Courleciel

`dropdown-component-courleciel` est une solution légère et flexible pour intégrer des menus déroulants dans vos applications web. Il est conçu pour être simple à utiliser tout en offrant une personnalisation facile.

---

## 📦 Installation

Installez le composant via npm :

```bash
npm install dropdown-component-courleciel
```

---

## 🚀 Utilisation

Une fois installé, vous pouvez importer et utiliser le composant dans votre projet comme suit :

```javascript
import Dropdown from 'dropdown-component-courleciel';

// Exemple d'utilisation
<Dropdown label="Sélectionnez une option">
  <Dropdown.Item>Option 1</Dropdown.Item>
  <Dropdown.Item>Option 2</Dropdown.Item>
  <Dropdown.Item>Option 3</Dropdown.Item>
</Dropdown>
```

Dans cet exemple, le composant `Dropdown` crée un menu déroulant avec trois options.
La prop `label` définit le texte affiché sur le bouton du menu.

---

## ⚙️ Propriétés

Le composant `Dropdown` accepte les propriétés suivantes :

| Propriété  | Type    | Défaut   | Description                                                                 |
|------------|---------|----------|-----------------------------------------------------------------------------|
| `label`    | string  | -        | **Obligatoire**. Texte affiché sur le bouton du menu déroulant.             |
| `top`      | boolean | `false`  | Affiche le menu au-dessus du bouton si défini sur `true`.                   |
| `bottom`   | boolean | `false`  | Affiche le menu en dessous du bouton si défini sur `true`.                  |
| `width`    | string  | -        | Définit la largeur du menu déroulant. Accepte toute valeur CSS valide.      |
| `theme`    | string  | `dark`   | Définit le thème du composant. Valeurs possibles : `'dark'`, `'light'`, `'auto'`. |

---

## 🎨 Personnalisation

Vous pouvez personnaliser l'apparence du menu déroulant en :

1. Modifiant directement les propriétés CSS.
2. Utilisant des classes CSS personnalisées pour répondre à vos besoins en design.

---

## 🌟 Fonctionnalités

- **Léger** : Performances optimales grâce à un code minimal.
- **Personnalisable** : Ajustez facilement les styles et le comportement avec des props ou du CSS.
- **Placement Flexible** : Affichez le menu au-dessus ou en dessous du bouton grâce aux props `top` et `bottom`.
- **Design Réactif** : S'adapte parfaitement à toutes les tailles d'écran.

---

## 🔗 Liens

- **[Dépôt GitHub](https://github.com/Courleciel/wealthhealth-components_Dropdown)**
- **[Package NPM](https://www.npmjs.com/package/dropdown-component-courleciel)**

---

N'hésitez pas à contribuer, soumettre des problèmes ou proposer des améliorations !
