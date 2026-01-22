import type { Element } from '../types';

export const elements: Element[] = [
  // Базові елементи (доступні з початку)
  { id: 'h2', name: 'Водень', nameEn: 'Hydrogen', formula: 'H₂', category: 'елемент', emoji: '🎈', description: 'Найлегший газ у Всесвіті. Без кольору та запаху.', isBasic: true, state: 'газ' },
  { id: 'o2', name: 'Кисень', nameEn: 'Oxygen', formula: 'O₂', category: 'елемент', emoji: '💨', description: 'Газ, необхідний для дихання та горіння.', isBasic: true, state: 'газ' },
  { id: 'c', name: 'Вуглець', nameEn: 'Carbon', formula: 'C', category: 'елемент', emoji: '⬛', description: 'Основа органічного життя. Існує у формі алмазу та графіту.', isBasic: true, state: 'тверда' },
  { id: 'n2', name: 'Азот', nameEn: 'Nitrogen', formula: 'N₂', category: 'елемент', emoji: '🌫️', description: 'Складає 78% атмосфери Землі.', isBasic: true, state: 'газ' },
  { id: 'fe', name: 'Залізо', nameEn: 'Iron', formula: 'Fe', category: 'елемент', emoji: '🔩', description: 'Найпоширеніший метал на Землі.', isBasic: true, state: 'тверда' },
  { id: 's', name: 'Сірка', nameEn: 'Sulfur', formula: 'S', category: 'елемент', emoji: '🟡', description: 'Жовта тверда речовина з характерним запахом.', isBasic: true, state: 'тверда' },
  { id: 'h2o', name: 'Вода', nameEn: 'Water', formula: 'H₂O', category: 'сполука', emoji: '💧', description: 'Основа життя на Землі. Унікальний розчинник.', isBasic: true, state: 'рідина' },
  { id: 'na', name: 'Натрій', nameEn: 'Sodium', formula: 'Na', category: 'елемент', emoji: '✨', description: 'М\'який лужний метал, реагує з водою.', isBasic: true, state: 'тверда' },
  { id: 'cl2', name: 'Хлор', nameEn: 'Chlorine', formula: 'Cl₂', category: 'елемент', emoji: '☠️', description: 'Жовто-зелений отруйний газ з різким запахом.', isBasic: true, state: 'газ' },
  { id: 'ca', name: 'Кальцій', nameEn: 'Calcium', formula: 'Ca', category: 'елемент', emoji: '🦴', description: 'Метал, основа кісток та зубів.', isBasic: true, state: 'тверда' },
  
  // Додаткові базові елементи
  { id: 'k', name: 'Калій', nameEn: 'Potassium', formula: 'K', category: 'елемент', emoji: '🍌', description: 'Лужний метал, важливий для організму.', isBasic: true, state: 'тверда' },
  { id: 'mg', name: 'Магній', nameEn: 'Magnesium', formula: 'Mg', category: 'елемент', emoji: '💥', description: 'Легкий метал, горить яскравим білим полум\'ям.', isBasic: true, state: 'тверда' },
  
  // Відкриваємі сполуки
  { id: 'nacl', name: 'Кухонна сіль', nameEn: 'Table Salt', formula: 'NaCl', category: 'сіль', emoji: '🧂', description: 'Хлорид натрію - найважливіша харчова добавка.', isBasic: false, state: 'тверда' },
  { id: 'fes', name: 'Сульфід заліза', nameEn: 'Iron Sulfide', formula: 'FeS', category: 'сполука', emoji: '⚫', description: 'Чорна тверда речовина, схожа на метал.', isBasic: false, state: 'тверда' },
  { id: 'co2', name: 'Вуглекислий газ', nameEn: 'Carbon Dioxide', formula: 'CO₂', category: 'газ', emoji: '💭', description: 'Газ, який ми видихаємо. Використовується в газованих напоях.', isBasic: false, state: 'газ' },
  { id: 'hcl', name: 'Хлоридна кислота', nameEn: 'Hydrochloric Acid', formula: 'HCl', category: 'кислота', emoji: '🧪', description: 'Сильна кислота, міститься в шлунковому соку.', isBasic: false, state: 'рідина' },
  { id: 'h2s', name: 'Сірководень', nameEn: 'Hydrogen Sulfide', formula: 'H₂S', category: 'газ', emoji: '🥚', description: 'Газ із запахом тухлих яєць.', isBasic: false, state: 'газ' },
  { id: 'so2', name: 'Сірчистий газ', nameEn: 'Sulfur Dioxide', formula: 'SO₂', category: 'газ', emoji: '🌋', description: 'Їдкий газ, утворюється при горінні сірки.', isBasic: false, state: 'газ' },
  { id: 'so3', name: 'Сірчаний ангідрид', nameEn: 'Sulfur Trioxide', formula: 'SO₃', category: 'оксид', emoji: '☁️', description: 'Димуча рідина, реагує з водою.', isBasic: false, state: 'рідина' },
  { id: 'h2so4', name: 'Сірчана кислота', nameEn: 'Sulfuric Acid', formula: 'H₂SO₄', category: 'кислота', emoji: '⚗️', description: 'Найважливіша промислова кислота.', isBasic: false, state: 'рідина' },
  { id: 'naoh', name: 'Їдкий натр', nameEn: 'Sodium Hydroxide', formula: 'NaOH', category: 'основа', emoji: '🧴', description: 'Сильна основа, використовується для виробництва мила.', isBasic: false, state: 'тверда' },
  { id: 'fe2o3', name: 'Іржа', nameEn: 'Rust', formula: 'Fe₂O₃', category: 'оксид', emoji: '🟤', description: 'Оксид заліза(III), продукт корозії.', isBasic: false, state: 'тверда' },
  { id: 'feo', name: 'Оксид заліза(II)', nameEn: 'Iron(II) Oxide', formula: 'FeO', category: 'оксид', emoji: '⚫', description: 'Чорний порошок, використовується в металургії.', isBasic: false, state: 'тверда' },
  { id: 'cao', name: 'Негашене вапно', nameEn: 'Quickite', formula: 'CaO', category: 'оксид', emoji: '⬜', description: 'Біла речовина, отримують випалюванням вапняку.', isBasic: false, state: 'тверда' },
  { id: 'caoh2', name: 'Гашене вапно', nameEn: 'Slaked Lime', formula: 'Ca(OH)₂', category: 'основа', emoji: '🥛', description: 'Використовується в будівництві та сільському господарстві.', isBasic: false, state: 'тверда' },
  { id: 'caco3', name: 'Крейда', nameEn: 'Chalk', formula: 'CaCO₃', category: 'сіль', emoji: '📝', description: 'Карбонат кальцію - основа вапняку, мармуру, крейди.', isBasic: false, state: 'тверда' },
  { id: 'cacl2', name: 'Хлорид кальцію', nameEn: 'Calcium Chloride', formula: 'CaCl₂', category: 'сіль', emoji: '❄️', description: 'Використовується як осушувач та антиобледенювач.', isBasic: false, state: 'тверда' },
  { id: 'na2o', name: 'Оксид натрію', nameEn: 'Sodium Oxide', formula: 'Na₂O', category: 'оксид', emoji: '💫', description: 'Біла речовина, бурхливо реагує з водою.', isBasic: false, state: 'тверда' },
  { id: 'mgo', name: 'Оксид магнію', nameEn: 'Magnesium Oxide', formula: 'MgO', category: 'оксид', emoji: '⚪', description: 'Біла вогнетривка речовина, паленезія.', isBasic: false, state: 'тверда' },
  { id: 'mgoh2', name: 'Гідроксид магнію', nameEn: 'Magnesium Hydroxide', formula: 'Mg(OH)₂', category: 'основа', emoji: '💊', description: 'Використовується як антацид та проносне.', isBasic: false, state: 'тверда' },
  { id: 'mgcl2', name: 'Хлорид магнію', nameEn: 'Magnesium Chloride', formula: 'MgCl₂', category: 'сіль', emoji: '🌊', description: 'Міститься в морській воді.', isBasic: false, state: 'тверда' },
  { id: 'mgso4', name: 'Англійська сіль', nameEn: 'Epsom Salt', formula: 'MgSO₄', category: 'сіль', emoji: '🛁', description: 'Використовується для ванн та в медицині.', isBasic: false, state: 'тверда' },
  { id: 'nh3', name: 'Аміак', nameEn: 'Ammonia', formula: 'NH₃', category: 'газ', emoji: '🧹', description: 'Газ із різким запахом, основа добрив.', isBasic: false, state: 'газ' },
  { id: 'hno3', name: 'Нітратна кислота', nameEn: 'Nitric Acid', formula: 'HNO₃', category: 'кислота', emoji: '💥', description: 'Сильна кислота, димуча рідина.', isBasic: false, state: 'рідина' },
  { id: 'no', name: 'Оксид азоту(II)', nameEn: 'Nitric Oxide', formula: 'NO', category: 'газ', emoji: '🔵', description: 'Безбарвний газ, на повітрі буріє.', isBasic: false, state: 'газ' },
  { id: 'no2', name: 'Оксид азоту(IV)', nameEn: 'Nitrogen Dioxide', formula: 'NO₂', category: 'газ', emoji: '🟠', description: 'Бурий отруйний газ.', isBasic: false, state: 'газ' },
  { id: 'n2o', name: 'Веселящий газ', nameEn: 'Laughing Gas', formula: 'N₂O', category: 'газ', emoji: '😂', description: 'Закис азоту, використовується як анестетик.', isBasic: false, state: 'газ' },
  { id: 'koh', name: 'Їдкий калій', nameEn: 'Potassium Hydroxide', formula: 'KOH', category: 'основа', emoji: '🔋', description: 'Сильна основа, використовується в батареях.', isBasic: false, state: 'тверда' },
  { id: 'kcl', name: 'Хлорид калію', nameEn: 'Potassium Chloride', formula: 'KCl', category: 'сіль', emoji: '🧪', description: 'Калійна сіль, замінник кухонної солі.', isBasic: false, state: 'тверда' },
  { id: 'k2o', name: 'Оксид калію', nameEn: 'Potassium Oxide', formula: 'K₂O', category: 'оксид', emoji: '🟡', description: 'Жовтувата речовина, бурхливо реагує з водою.', isBasic: false, state: 'тверда' },
  { id: 'na2so4', name: 'Сульфат натрію', nameEn: 'Sodium Sulfate', formula: 'Na₂SO₄', category: 'сіль', emoji: '🧊', description: 'Глауберова сіль, проносний засіб.', isBasic: false, state: 'тверда' },
  { id: 'na2co3', name: 'Сода', nameEn: 'Sodium Carbonate', formula: 'Na₂CO₃', category: 'сіль', emoji: '🫧', description: 'Кальцинована сода, використовується для прання.', isBasic: false, state: 'тверда' },
  { id: 'nahco3', name: 'Харчова сода', nameEn: 'Baking Soda', formula: 'NaHCO₃', category: 'сіль', emoji: '🧁', description: 'Гідрокарбонат натрію, розпушувач тіста.', isBasic: false, state: 'тверда' },
  { id: 'fecl2', name: 'Хлорид заліза(II)', nameEn: 'Iron(II) Chloride', formula: 'FeCl₂', category: 'сіль', emoji: '🟢', description: 'Зеленувата сіль заліза.', isBasic: false, state: 'тверда' },
  { id: 'fecl3', name: 'Хлорид заліза(III)', nameEn: 'Iron(III) Chloride', formula: 'FeCl₃', category: 'сіль', emoji: '🟤', description: 'Бура сіль, використовується для травлення плат.', isBasic: false, state: 'тверда' },
  { id: 'feso4', name: 'Залізний купорос', nameEn: 'Iron Sulfate', formula: 'FeSO₄', category: 'сіль', emoji: '💚', description: 'Зелені кристали, використовується як добриво.', isBasic: false, state: 'тверда' },
  { id: 'caso4', name: 'Гіпс', nameEn: 'Gypsum', formula: 'CaSO₄', category: 'сіль', emoji: '🏛️', description: 'Сульфат кальцію, основа гіпсу та алебастру.', isBasic: false, state: 'тверда' },
  { id: 'co', name: 'Чадний газ', nameEn: 'Carbon Monoxide', formula: 'CO', category: 'газ', emoji: '☠️', description: 'Отруйний газ без запаху та кольору.', isBasic: false, state: 'газ' },
  { id: 'h2co3', name: 'Вугільна кислота', nameEn: 'Carbonic Acid', formula: 'H₂CO₃', category: 'кислота', emoji: '🥤', description: 'Слабка кислота, утворюється в газованій воді.', isBasic: false, state: 'рідина' },
  { id: 'h2o2', name: 'Перекис водню', nameEn: 'Hydrogen Peroxide', formula: 'H₂O₂', category: 'сполука', emoji: '🩹', description: 'Антисептик, відбілювач.', isBasic: false, state: 'рідина' },
  { id: 'al', name: 'Алюміній', nameEn: 'Aluminum', formula: 'Al', category: 'елемент', emoji: '🥫', description: 'Легкий метал, третій за поширеністю елемент.', isBasic: false, state: 'тверда' },
  { id: 'al2o3', name: 'Корунд', nameEn: 'Corundum', formula: 'Al₂O₃', category: 'оксид', emoji: '💎', description: 'Оксид алюмінію, рубін та сапфір.', isBasic: false, state: 'тверда' },
  { id: 'aloh3', name: 'Гідроксид алюмінію', nameEn: 'Aluminum Hydroxide', formula: 'Al(OH)₃', category: 'основа', emoji: '🤍', description: 'Амфотерна основа, антацид.', isBasic: false, state: 'тверда' },
  { id: 'alcl3', name: 'Хлорид алюмінію', nameEn: 'Aluminum Chloride', formula: 'AlCl₃', category: 'сіль', emoji: '🧪', description: 'Каталізатор в органічному синтезі.', isBasic: false, state: 'тверда' },
  { id: 'cu', name: 'Мідь', nameEn: 'Copper', formula: 'Cu', category: 'елемент', emoji: '🟫', description: 'Червонуватий метал, відмінний провідник.', isBasic: false, state: 'тверда' },
  { id: 'cuo', name: 'Оксид міді(II)', nameEn: 'Copper(II) Oxide', formula: 'CuO', category: 'оксид', emoji: '⬛', description: 'Чорний порошок.', isBasic: false, state: 'тверда' },
  { id: 'cuoh2', name: 'Гідроксид міді(II)', nameEn: 'Copper(II) Hydroxide', formula: 'Cu(OH)₂', category: 'основа', emoji: '🔵', description: 'Блакитний осад.', isBasic: false, state: 'тверда' },
  { id: 'cuso4', name: 'Мідний купорос', nameEn: 'Copper Sulfate', formula: 'CuSO₄', category: 'сіль', emoji: '💙', description: 'Сині кристали, фунгіцид.', isBasic: false, state: 'тверда' },
  { id: 'cucl2', name: 'Хлорид міді(II)', nameEn: 'Copper(II) Chloride', formula: 'CuCl₂', category: 'сіль', emoji: '💚', description: 'Зелено-блакитні кристали.', isBasic: false, state: 'тверда' },
  { id: 'zn', name: 'Цинк', nameEn: 'Zinc', formula: 'Zn', category: 'елемент', emoji: '🔘', description: 'Сріблясто-білий метал, захищає залізо.', isBasic: false, state: 'тверда' },
  { id: 'zno', name: 'Оксид цинку', nameEn: 'Zinc Oxide', formula: 'ZnO', category: 'оксид', emoji: '⬜', description: 'Білий порошок, використовується в мазях.', isBasic: false, state: 'тверда' },
  { id: 'znoh2', name: 'Гідроксид цинку', nameEn: 'Zinc Hydroxide', formula: 'Zn(OH)₂', category: 'основа', emoji: '🤍', description: 'Амфотерна основа.', isBasic: false, state: 'тверда' },
  { id: 'zncl2', name: 'Хлорид цинку', nameEn: 'Zinc Chloride', formula: 'ZnCl₂', category: 'сіль', emoji: '🧪', description: 'Використовується для паяння.', isBasic: false, state: 'тверда' },
  { id: 'znso4', name: 'Сульфат цинку', nameEn: 'Zinc Sulfate', formula: 'ZnSO₄', category: 'сіль', emoji: '💎', description: 'Білий цинковий купорос.', isBasic: false, state: 'тверда' },
  { id: 'pb', name: 'Свинець', nameEn: 'Lead', formula: 'Pb', category: 'елемент', emoji: '⚫', description: 'Важкий м\'який метал, токсичний.', isBasic: false, state: 'тверда' },
  { id: 'pbo', name: 'Оксид свинцю', nameEn: 'Lead Oxide', formula: 'PbO', category: 'оксид', emoji: '🟡', description: 'Жовтий порошок, глет.', isBasic: false, state: 'тверда' },
  { id: 'ag', name: 'Срібло', nameEn: 'Silver', formula: 'Ag', category: 'елемент', emoji: '🥈', description: 'Благородний метал, найкращий провідник.', isBasic: false, state: 'тверда' },
  { id: 'agno3', name: 'Нітрат срібла', nameEn: 'Silver Nitrate', formula: 'AgNO₃', category: 'сіль', emoji: '💿', description: 'Ляпіс, використовується в фотографії.', isBasic: false, state: 'тверда' },
  { id: 'agcl', name: 'Хлорид срібла', nameEn: 'Silver Chloride', formula: 'AgCl', category: 'сіль', emoji: '⬜', description: 'Білий осад, темніє на світлі.', isBasic: false, state: 'тверда' },
  { id: 'p', name: 'Фосфор', nameEn: 'Phosphorus', formula: 'P', category: 'елемент', emoji: '🔥', description: 'Існує в білій та червоній формі.', isBasic: false, state: 'тверда' },
  { id: 'p2o5', name: 'Оксид фосфору(V)', nameEn: 'Phosphorus Pentoxide', formula: 'P₂O₅', category: 'оксид', emoji: '💨', description: 'Сильний осушувач.', isBasic: false, state: 'тверда' },
  { id: 'h3po4', name: 'Ортофосфорна кислота', nameEn: 'Phosphoric Acid', formula: 'H₃PO₄', category: 'кислота', emoji: '🥤', description: 'Міститься в Кока-Колі.', isBasic: false, state: 'рідина' },
  { id: 'si', name: 'Кремній', nameEn: 'Silicon', formula: 'Si', category: 'елемент', emoji: '💻', description: 'Основа напівпровідникової електроніки.', isBasic: false, state: 'тверда' },
  { id: 'sio2', name: 'Кварц', nameEn: 'Quartz', formula: 'SiO₂', category: 'оксид', emoji: '💎', description: 'Діоксид кремнію, основа скла.', isBasic: false, state: 'тверда' },
  { id: 'na2sio3', name: 'Рідке скло', nameEn: 'Water Glass', formula: 'Na₂SiO₃', category: 'сіль', emoji: '🪟', description: 'Силікат натрію, клей.', isBasic: false, state: 'рідина' },
  { id: 'kno3', name: 'Калійна селітра', nameEn: 'Potassium Nitrate', formula: 'KNO₃', category: 'сіль', emoji: '💥', description: 'Компонент чорного пороху.', isBasic: false, state: 'тверда' },
  { id: 'nano3', name: 'Натрієва селітра', nameEn: 'Sodium Nitrate', formula: 'NaNO₃', category: 'сіль', emoji: '🧪', description: 'Чилійська селітра, добриво.', isBasic: false, state: 'тверда' },
  { id: 'nh4cl', name: 'Нашатир', nameEn: 'Ammonium Chloride', formula: 'NH₄Cl', category: 'сіль', emoji: '⬜', description: 'Використовується в паянні та медицині.', isBasic: false, state: 'тверда' },
  { id: 'nh4no3', name: 'Аміачна селітра', nameEn: 'Ammonium Nitrate', formula: 'NH₄NO₃', category: 'сіль', emoji: '🌱', description: 'Найважливіше азотне добриво.', isBasic: false, state: 'тверда' },
  { id: 'ch4', name: 'Метан', nameEn: 'Methane', formula: 'CH₄', category: 'газ', emoji: '⛽', description: 'Природний газ, парниковий газ.', isBasic: false, state: 'газ' },
  { id: 'c2h5oh', name: 'Етанол', nameEn: 'Ethanol', formula: 'C₂H₅OH', category: 'сполука', emoji: '🍷', description: 'Спирт, використовується як пальне та напій.', isBasic: false, state: 'рідина' },
  { id: 'ch3cooh', name: 'Оцтова кислота', nameEn: 'Acetic Acid', formula: 'CH₃COOH', category: 'кислота', emoji: '🫗', description: 'Основа столового оцту.', isBasic: false, state: 'рідина' },
  { id: 'c6h12o6', name: 'Глюкоза', nameEn: 'Glucose', formula: 'C₆H₁₂O₆', category: 'сполука', emoji: '🍬', description: 'Простий цукор, джерело енергії.', isBasic: false, state: 'тверда' },
  { id: 'naclo', name: 'Гіпохлорит натрію', nameEn: 'Sodium Hypochlorite', formula: 'NaClO', category: 'сіль', emoji: '🧴', description: 'Основа відбілювача та дезінфекторів.', isBasic: false, state: 'рідина' },
  { id: 'h2so3', name: 'Сірчиста кислота', nameEn: 'Sulfurous Acid', formula: 'H₂SO₃', category: 'кислота', emoji: '💧', description: 'Слабка кислота, консервант.', isBasic: false, state: 'рідина' },
  { id: 'baso4', name: 'Сульфат барію', nameEn: 'Barium Sulfate', formula: 'BaSO₄', category: 'сіль', emoji: '⬜', description: 'Білий осад, контраст для рентгену.', isBasic: false, state: 'тверда' },
  { id: 'ba', name: 'Барій', nameEn: 'Barium', formula: 'Ba', category: 'елемент', emoji: '💚', description: 'Лужноземельний метал.', isBasic: false, state: 'тверда' },
  { id: 'bacl2', name: 'Хлорид барію', nameEn: 'Barium Chloride', formula: 'BaCl₂', category: 'сіль', emoji: '🟢', description: 'Токсична сіль барію.', isBasic: false, state: 'тверда' },
  { id: 'baoh2', name: 'Гідроксид барію', nameEn: 'Barium Hydroxide', formula: 'Ba(OH)₂', category: 'основа', emoji: '⬜', description: 'Баритова вода.', isBasic: false, state: 'тверда' },
  { id: 'fe3o4', name: 'Магнетит', nameEn: 'Magnetite', formula: 'Fe₃O₄', category: 'оксид', emoji: '🧲', description: 'Магнітна залізна руда.', isBasic: false, state: 'тверда' },
  { id: 'feoh2', name: 'Гідроксид заліза(II)', nameEn: 'Iron(II) Hydroxide', formula: 'Fe(OH)₂', category: 'основа', emoji: '🟢', description: 'Білий осад, швидко окислюється.', isBasic: false, state: 'тверда' },
  { id: 'feoh3', name: 'Гідроксид заліза(III)', nameEn: 'Iron(III) Hydroxide', formula: 'Fe(OH)₃', category: 'основа', emoji: '🟤', description: 'Бурий осад, іржа.', isBasic: false, state: 'тверда' },
  
  // Додаткові елементи
  { id: 'nh4oh', name: 'Нашатирний спирт', nameEn: 'Ammonium Hydroxide', formula: 'NH₄OH', category: 'основа', emoji: '🧴', description: 'Водний розчин аміаку, використовується в побуті та медицині.', isBasic: false, state: 'рідина' },
  { id: 'au', name: 'Золото', nameEn: 'Gold', formula: 'Au', category: 'елемент', emoji: '🥇', description: 'Благородний метал, символ багатства.', isBasic: false, state: 'тверда' },
  { id: 'pt', name: 'Платина', nameEn: 'Platinum', formula: 'Pt', category: 'елемент', emoji: '⚪', description: 'Дорогоцінний метал, каталізатор.', isBasic: false, state: 'тверда' },
  { id: 'hg', name: 'Ртуть', nameEn: 'Mercury', formula: 'Hg', category: 'елемент', emoji: '🪩', description: 'Єдиний рідкий метал за кімнатної температури.', isBasic: false, state: 'рідина' },
  { id: 'br2', name: 'Бром', nameEn: 'Bromine', formula: 'Br₂', category: 'елемент', emoji: '🟤', description: 'Єдиний рідкий неметал, їдкий червоно-бурий.', isBasic: false, state: 'рідина' },
  { id: 'i2', name: 'Йод', nameEn: 'Iodine', formula: 'I₂', category: 'елемент', emoji: '🟣', description: 'Темно-фіолетові кристали, антисептик.', isBasic: false, state: 'тверда' },
  { id: 'ki', name: 'Йодид калію', nameEn: 'Potassium Iodide', formula: 'KI', category: 'сіль', emoji: '⬜', description: 'Використовується для профілактики захворювань щитовидної залози.', isBasic: false, state: 'тверда' },
  { id: 'nabr', name: 'Бромід натрію', nameEn: 'Sodium Bromide', formula: 'NaBr', category: 'сіль', emoji: '⬜', description: 'Седативний засіб.', isBasic: false, state: 'тверда' },
  { id: 'hbr', name: 'Бромідна кислота', nameEn: 'Hydrobromic Acid', formula: 'HBr', category: 'кислота', emoji: '🧪', description: 'Сильна кислота.', isBasic: false, state: 'рідина' },
  { id: 'hi', name: 'Йодидна кислота', nameEn: 'Hydroiodic Acid', formula: 'HI', category: 'кислота', emoji: '🧪', description: 'Найсильніша галогеноводнева кислота.', isBasic: false, state: 'рідина' },
  { id: 'nai', name: 'Йодид натрію', nameEn: 'Sodium Iodide', formula: 'NaI', category: 'сіль', emoji: '⬜', description: 'Джерело йоду.', isBasic: false, state: 'тверда' },
  { id: 'caco3ite', name: 'Вапняк', nameEn: 'Limestoneite', formula: 'CaCO₃', category: 'сполука', emoji: '🪨', description: 'Осадова порода, основа цементу.', isBasic: false, state: 'тверда' },
  { id: 'li', name: 'Літій', nameEn: 'Lithium', formula: 'Li', category: 'елемент', emoji: '🔋', description: 'Найлегший метал, використовується в акумуляторах.', isBasic: false, state: 'тверда' },
  { id: 'lioh', name: 'Гідроксид літію', nameEn: 'Lithium Hydroxide', formula: 'LiOH', category: 'основа', emoji: '⬜', description: 'Використовується в літій-іонних акумуляторах.', isBasic: false, state: 'тверда' },
  { id: 'licl', name: 'Хлорид літію', nameEn: 'Lithium Chloride', formula: 'LiCl', category: 'сіль', emoji: '⬜', description: 'Осушувач, електроліт.', isBasic: false, state: 'тверда' },
  { id: 'li2o', name: 'Оксид літію', nameEn: 'Lithium Oxide', formula: 'Li₂O', category: 'оксид', emoji: '⬜', description: 'Біла речовина.', isBasic: false, state: 'тверда' },
  { id: 'sn', name: 'Олово', nameEn: 'Tin', formula: 'Sn', category: 'елемент', emoji: '🥫', description: 'М\'який метал, використовується для паяння.', isBasic: false, state: 'тверда' },
  { id: 'sno2', name: 'Оксид олова', nameEn: 'Tin Oxide', formula: 'SnO₂', category: 'оксид', emoji: '⬜', description: 'Касситерит, олов\'яна руда.', isBasic: false, state: 'тверда' },
  { id: 'mn', name: 'Марганець', nameEn: 'Manganese', formula: 'Mn', category: 'елемент', emoji: '🔩', description: 'Твердий метал, використовується в сталі.', isBasic: false, state: 'тверда' },
  { id: 'mno2', name: 'Оксид марганцю(IV)', nameEn: 'Manganese Dioxide', formula: 'MnO₂', category: 'оксид', emoji: '⬛', description: 'Піролюзит, використовується в батарейках.', isBasic: false, state: 'тверда' },
  { id: 'kmno4', name: 'Перманганат калію', nameEn: 'Potassium Permanganate', formula: 'KMnO₄', category: 'сіль', emoji: '🟣', description: 'Марганцівка, сильний окисник, антисептик.', isBasic: false, state: 'тверда' },
  { id: 'cr', name: 'Хром', nameEn: 'Chromium', formula: 'Cr', category: 'елемент', emoji: '✨', description: 'Блискучий твердий метал.', isBasic: false, state: 'тверда' },
  { id: 'cr2o3', name: 'Оксид хрому(III)', nameEn: 'Chromium(III) Oxide', formula: 'Cr₂O₃', category: 'оксид', emoji: '🟢', description: 'Зелений пігмент.', isBasic: false, state: 'тверда' },
  { id: 'k2cr2o7', name: 'Біхромат калію', nameEn: 'Potassium Dichromate', formula: 'K₂Cr₂O₇', category: 'сіль', emoji: '🟠', description: 'Оранжеві кристали, сильний окисник.', isBasic: false, state: 'тверда' },
  { id: 'co', name: 'Кобальт', nameEn: 'Cobalt', formula: 'Co', category: 'елемент', emoji: '💙', description: 'Магнітний метал, синій пігмент.', isBasic: false, state: 'тверда' },
  { id: 'ni', name: 'Нікель', nameEn: 'Nickel', formula: 'Ni', category: 'елемент', emoji: '🪙', description: 'Корозійностійкий метал.', isBasic: false, state: 'тверда' },
  { id: 'w', name: 'Вольфрам', nameEn: 'Tungsten', formula: 'W', category: 'елемент', emoji: '💡', description: 'Найтугоплавкіший метал.', isBasic: false, state: 'тверда' },
  { id: 'ti', name: 'Титан', nameEn: 'Titanium', formula: 'Ti', category: 'елемент', emoji: '🛡️', description: 'Легкий і міцний метал.', isBasic: false, state: 'тверда' },
  { id: 'tio2', name: 'Оксид титану', nameEn: 'Titanium Dioxide', formula: 'TiO₂', category: 'оксид', emoji: '⬜', description: 'Білий пігмент, сонцезахисний крем.', isBasic: false, state: 'тверда' },
  { id: 'u', name: 'Уран', nameEn: 'Uranium', formula: 'U', category: 'елемент', emoji: '☢️', description: 'Радіоактивний метал, ядерне паливо.', isBasic: false, state: 'тверда' },
  { id: 'uo2', name: 'Оксид урану', nameEn: 'Uranium Dioxide', formula: 'UO₂', category: 'оксид', emoji: '☢️', description: 'Ядерне паливо.', isBasic: false, state: 'тверда' },
  { id: 'nio', name: 'Оксид нікелю', nameEn: 'Nickel Oxide', formula: 'NiO', category: 'оксид', emoji: '🟢', description: 'Зелений порошок, каталізатор.', isBasic: false, state: 'тверда' },
  { id: 'nicl2', name: 'Хлорид нікелю', nameEn: 'Nickel Chloride', formula: 'NiCl₂', category: 'сіль', emoji: '🟢', description: 'Зелені кристали.', isBasic: false, state: 'тверда' },
  { id: 'ticl4', name: 'Тетрахлорид титану', nameEn: 'Titanium Tetrachloride', formula: 'TiCl₄', category: 'сполука', emoji: '💨', description: 'Димуча рідина, використовується для димових завіс.', isBasic: false, state: 'рідина' },
  { id: 'ali3', name: 'Йодид алюмінію', nameEn: 'Aluminum Iodide', formula: 'AlI₃', category: 'сіль', emoji: '🟡', description: 'Жовті кристали.', isBasic: false, state: 'тверда' },
  { id: 'naalо2', name: 'Алюмінат натрію', nameEn: 'Sodium Aluminate', formula: 'NaAlO₂', category: 'сіль', emoji: '⬜', description: 'Використовується для очистки води.', isBasic: false, state: 'тверда' },
  { id: 'alno33', name: 'Нітрат алюмінію', nameEn: 'Aluminum Nitrate', formula: 'Al(NO₃)₃', category: 'сіль', emoji: '⬜', description: 'Безбарвні кристали.', isBasic: false, state: 'тверда' },
  { id: 'cu2o', name: 'Оксид міді(I)', nameEn: 'Copper(I) Oxide', formula: 'Cu₂O', category: 'оксид', emoji: '🔴', description: 'Червоний порошок.', isBasic: false, state: 'тверда' },
  { id: 'bao', name: 'Оксид барію', nameEn: 'Barium Oxide', formula: 'BaO', category: 'оксид', emoji: '⬜', description: 'Біла речовина.', isBasic: false, state: 'тверда' },
  { id: 'ca3n2', name: 'Нітрид кальцію', nameEn: 'Calcium Nitride', formula: 'Ca₃N₂', category: 'сполука', emoji: '🟤', description: 'Коричневі кристали.', isBasic: false, state: 'тверда' },
  { id: 'h2o2_pure', name: 'Пергідроль', nameEn: 'Hydrogen Peroxide Concentrated', formula: 'H₂O₂', category: 'сполука', emoji: '💧', description: 'Концентрований перекис водню.', isBasic: false, state: 'рідина' },
  { id: 'o3', name: 'Озон', nameEn: 'Ozone', formula: 'O₃', category: 'газ', emoji: '🌀', description: 'Алотропна форма кисню, захисний шар атмосфери.', isBasic: false, state: 'газ' },
  { id: 'f2', name: 'Фтор', nameEn: 'Fluorine', formula: 'F₂', category: 'елемент', emoji: '💛', description: 'Найактивніший неметал, отруйний газ.', isBasic: false, state: 'газ' },
  { id: 'hf', name: 'Фтороводнева кислота', nameEn: 'Hydrofluoric Acid', formula: 'HF', category: 'кислота', emoji: '☠️', description: 'Небезпечна кислота, роз\'їдає скло.', isBasic: false, state: 'рідина' },
  { id: 'naf', name: 'Фторид натрію', nameEn: 'Sodium Fluoride', formula: 'NaF', category: 'сіль', emoji: '🦷', description: 'Використовується в зубних пастах.', isBasic: false, state: 'тверда' },
  { id: 'caf2', name: 'Флюорит', nameEn: 'Calcium Fluoride', formula: 'CaF₂', category: 'сіль', emoji: '💎', description: 'Природний мінерал, плавиковий шпат.', isBasic: false, state: 'тверда' },
  
  // Лужноземельні метали та їх сполуки
  { id: 'sr', name: 'Стронцій', nameEn: 'Strontium', formula: 'Sr', category: 'елемент', emoji: '🔴', description: 'Лужноземельний метал, червоне забарвлення полум\'я.', isBasic: false, state: 'тверда' },
  { id: 'sroh2', name: 'Гідроксид стронцію', nameEn: 'Strontium Hydroxide', formula: 'Sr(OH)₂', category: 'основа', emoji: '⬜', description: 'Сильна основа.', isBasic: false, state: 'тверда' },
  { id: 'sro', name: 'Оксид стронцію', nameEn: 'Strontium Oxide', formula: 'SrO', category: 'оксид', emoji: '⬜', description: 'Біла речовина.', isBasic: false, state: 'тверда' },
  { id: 'srcl2', name: 'Хлорид стронцію', nameEn: 'Strontium Chloride', formula: 'SrCl₂', category: 'сіль', emoji: '⬜', description: 'Використовується в піротехніці.', isBasic: false, state: 'тверда' },
  { id: 'srco3', name: 'Карбонат стронцію', nameEn: 'Strontium Carbonate', formula: 'SrCO₃', category: 'сіль', emoji: '⬜', description: 'Стронціаніт.', isBasic: false, state: 'тверда' },
  { id: 'be', name: 'Берилій', nameEn: 'Beryllium', formula: 'Be', category: 'елемент', emoji: '💚', description: 'Легкий токсичний метал.', isBasic: false, state: 'тверда' },
  { id: 'beo', name: 'Оксид берилію', nameEn: 'Beryllium Oxide', formula: 'BeO', category: 'оксид', emoji: '⬜', description: 'Дуже токсичний.', isBasic: false, state: 'тверда' },
  { id: 'beso4', name: 'Сульфат берилію', nameEn: 'Beryllium Sulfate', formula: 'BeSO₄', category: 'сіль', emoji: '⬜', description: 'Токсична сіль.', isBasic: false, state: 'тверда' },
  { id: 'na2beo2', name: 'Берилат натрію', nameEn: 'Sodium Beryllate', formula: 'Na₂BeO₂', category: 'сіль', emoji: '⬜', description: 'Комплексна сіль.', isBasic: false, state: 'тверда' },
  { id: 'ra', name: 'Радій', nameEn: 'Radium', formula: 'Ra', category: 'елемент', emoji: '☢️', description: 'Радіоактивний лужноземельний метал.', isBasic: false, state: 'тверда' },
  { id: 'raoh2', name: 'Гідроксид радію', nameEn: 'Radium Hydroxide', formula: 'Ra(OH)₂', category: 'основа', emoji: '☢️', description: 'Радіоактивна основа.', isBasic: false, state: 'тверда' },
  
  // Лужні метали
  { id: 'rb', name: 'Рубідій', nameEn: 'Rubidium', formula: 'Rb', category: 'елемент', emoji: '🟣', description: 'Лужний метал, фіолетове забарвлення полум\'я.', isBasic: false, state: 'тверда' },
  { id: 'rboh', name: 'Гідроксид рубідію', nameEn: 'Rubidium Hydroxide', formula: 'RbOH', category: 'основа', emoji: '⬜', description: 'Сильна основа.', isBasic: false, state: 'тверда' },
  { id: 'rb2o', name: 'Оксид рубідію', nameEn: 'Rubidium Oxide', formula: 'Rb₂O', category: 'оксид', emoji: '⬜', description: 'Дуже реактивний оксид.', isBasic: false, state: 'тверда' },
  { id: 'cs', name: 'Цезій', nameEn: 'Cesium', formula: 'Cs', category: 'елемент', emoji: '🟡', description: 'Найактивніший лужний метал.', isBasic: false, state: 'тверда' },
  { id: 'csoh', name: 'Гідроксид цезію', nameEn: 'Cesium Hydroxide', formula: 'CsOH', category: 'основа', emoji: '⬜', description: 'Найсильніша основа.', isBasic: false, state: 'тверда' },
  { id: 'cs2o', name: 'Оксид цезію', nameEn: 'Cesium Oxide', formula: 'Cs₂O', category: 'оксид', emoji: '⬜', description: 'Надзвичайно реактивний.', isBasic: false, state: 'тверда' },
  
  // Гідриди
  { id: 'nah', name: 'Гідрид натрію', nameEn: 'Sodium Hydride', formula: 'NaH', category: 'сполука', emoji: '⬜', description: 'Сильний відновник.', isBasic: false, state: 'тверда' },
  { id: 'cah2', name: 'Гідрид кальцію', nameEn: 'Calcium Hydride', formula: 'CaH₂', category: 'сполука', emoji: '⬜', description: 'Джерело водню.', isBasic: false, state: 'тверда' },
  { id: 'li3n', name: 'Нітрид літію', nameEn: 'Lithium Nitride', formula: 'Li₃N', category: 'сполука', emoji: '🟤', description: 'Червоно-коричневі кристали.', isBasic: false, state: 'тверда' },
  
  // Карбонати
  { id: 'mgco3', name: 'Карбонат магнію', nameEn: 'Magnesium Carbonate', formula: 'MgCO₃', category: 'сіль', emoji: '⬜', description: 'Магнезит.', isBasic: false, state: 'тверда' },
  { id: 'feco3', name: 'Карбонат заліза', nameEn: 'Iron Carbonate', formula: 'FeCO₃', category: 'сіль', emoji: '🟤', description: 'Сидерит, залізна руда.', isBasic: false, state: 'тверда' },
  { id: 'k2co3', name: 'Карбонат калію', nameEn: 'Potassium Carbonate', formula: 'K₂CO₃', category: 'сіль', emoji: '⬜', description: 'Поташ.', isBasic: false, state: 'тверда' },
  { id: 'li2co3', name: 'Карбонат літію', nameEn: 'Lithium Carbonate', formula: 'Li₂CO₃', category: 'сіль', emoji: '⬜', description: 'Використовується в медицині.', isBasic: false, state: 'тверда' },
  
  // Фосфати
  { id: 'ca3po42', name: 'Фосфат кальцію', nameEn: 'Calcium Phosphate', formula: 'Ca₃(PO₄)₂', category: 'сіль', emoji: '⬜', description: 'Основа кісток та зубів.', isBasic: false, state: 'тверда' },
  { id: 'na3po4', name: 'Фосфат натрію', nameEn: 'Sodium Phosphate', formula: 'Na₃PO₄', category: 'сіль', emoji: '⬜', description: 'Використовується в миючих засобах.', isBasic: false, state: 'тверда' },
  
  // Хлорати та окисники
  { id: 'kclo3', name: 'Хлорат калію', nameEn: 'Potassium Chlorate', formula: 'KClO₃', category: 'сіль', emoji: '⚡', description: 'Сильний окисник, використовується в сірниках.', isBasic: false, state: 'тверда' },
  { id: 'hclo', name: 'Хлорнувата кислота', nameEn: 'Hypochlorous Acid', formula: 'HClO', category: 'кислота', emoji: '💧', description: 'Слабка кислота, дезінфектор.', isBasic: false, state: 'рідина' },
  
  // Перехідні метали
  { id: 'v', name: 'Ванадій', nameEn: 'Vanadium', formula: 'V', category: 'елемент', emoji: '⚙️', description: 'Твердий метал, використовується в сталі.', isBasic: false, state: 'тверда' },
  { id: 'v2o5', name: 'Оксид ванадію(V)', nameEn: 'Vanadium Pentoxide', formula: 'V₂O₅', category: 'оксид', emoji: '🟠', description: 'Каталізатор у виробництві сірчаної кислоти.', isBasic: false, state: 'тверда' },
  { id: 'voso4', name: 'Сульфат ванадилу', nameEn: 'Vanadyl Sulfate', formula: 'VOSO₄', category: 'сіль', emoji: '🔵', description: 'Синя сіль.', isBasic: false, state: 'тверда' },
  { id: 'mo', name: 'Молібден', nameEn: 'Molybdenum', formula: 'Mo', category: 'елемент', emoji: '⚙️', description: 'Тугоплавкий метал.', isBasic: false, state: 'тверда' },
  { id: 'moo3', name: 'Оксид молібдену', nameEn: 'Molybdenum Trioxide', formula: 'MoO₃', category: 'оксид', emoji: '⬜', description: 'Каталізатор.', isBasic: false, state: 'тверда' },
  { id: 'na2moo4', name: 'Молібдат натрію', nameEn: 'Sodium Molybdate', formula: 'Na₂MoO₄', category: 'сіль', emoji: '⬜', description: 'Інгібітор корозії.', isBasic: false, state: 'тверда' },
  { id: 'wo3', name: 'Оксид вольфраму', nameEn: 'Tungsten Trioxide', formula: 'WO₃', category: 'оксид', emoji: '🟡', description: 'Жовтий порошок.', isBasic: false, state: 'тверда' },
  { id: 'coo', name: 'Оксид кобальту', nameEn: 'Cobalt Oxide', formula: 'CoO', category: 'оксид', emoji: '⚫', description: 'Чорний порошок.', isBasic: false, state: 'тверда' },
  { id: 'cocl2', name: 'Хлорид кобальту', nameEn: 'Cobalt Chloride', formula: 'CoCl₂', category: 'сіль', emoji: '🔵', description: 'Індикатор вологи.', isBasic: false, state: 'тверда' },
  { id: 'mncl2', name: 'Хлорид марганцю', nameEn: 'Manganese Chloride', formula: 'MnCl₂', category: 'сіль', emoji: '🟤', description: 'Рожеві кристали.', isBasic: false, state: 'тверда' },
  { id: 'niso4', name: 'Сульфат нікелю', nameEn: 'Nickel Sulfate', formula: 'NiSO₄', category: 'сіль', emoji: '🟢', description: 'Зелені кристали.', isBasic: false, state: 'тверда' },
  { id: 'tioso4', name: 'Сульфат титанілу', nameEn: 'Titanyl Sulfate', formula: 'TiOSO₄', category: 'сіль', emoji: '⬜', description: 'Проміжний продукт.', isBasic: false, state: 'тверда' },
  
  // Бор та його сполуки
  { id: 'b', name: 'Бор', nameEn: 'Boron', formula: 'B', category: 'елемент', emoji: '🟤', description: 'Напівметал, твердий.', isBasic: false, state: 'тверда' },
  { id: 'b2o3', name: 'Оксид бору', nameEn: 'Boron Trioxide', formula: 'B₂O₃', category: 'оксид', emoji: '⬜', description: 'Скловидна речовина.', isBasic: false, state: 'тверда' },
  { id: 'h3bo3', name: 'Борна кислота', nameEn: 'Boric Acid', formula: 'H₃BO₃', category: 'кислота', emoji: '⬜', description: 'Антисептик.', isBasic: false, state: 'тверда' },
  { id: 'na2b4o7', name: 'Бура', nameEn: 'Borax', formula: 'Na₂B₄O₇', category: 'сіль', emoji: '⬜', description: 'Тетраборат натрію.', isBasic: false, state: 'тверда' },
  
  // Фосфор та сполуки
  { id: 'pcl3', name: 'Трихлорид фосфору', nameEn: 'Phosphorus Trichloride', formula: 'PCl₃', category: 'сполука', emoji: '💨', description: 'Димуча рідина.', isBasic: false, state: 'рідина' },
  { id: 'pcl5', name: 'Пентахлорид фосфору', nameEn: 'Phosphorus Pentachloride', formula: 'PCl₅', category: 'сполука', emoji: '⬜', description: 'Жовто-білі кристали.', isBasic: false, state: 'тверда' },
  
  // Сірка та сполуки
  { id: 'scl2', name: 'Дихлорид сірки', nameEn: 'Sulfur Dichloride', formula: 'SCl₂', category: 'сполука', emoji: '🟤', description: 'Червона рідина.', isBasic: false, state: 'рідина' },
  { id: 'cs2', name: 'Сірковуглець', nameEn: 'Carbon Disulfide', formula: 'CS₂', category: 'сполука', emoji: '💧', description: 'Токсична рідина.', isBasic: false, state: 'рідина' },
  
  // Вуглець та сполуки
  { id: 'ccl4', name: 'Тетрахлорметан', nameEn: 'Carbon Tetrachloride', formula: 'CCl₄', category: 'сполука', emoji: '💧', description: 'Токсичний розчинник.', isBasic: false, state: 'рідина' },
  { id: 'sic', name: 'Карбід кремнію', nameEn: 'Silicon Carbide', formula: 'SiC', category: 'сполука', emoji: '⬛', description: 'Карборунд, абразив.', isBasic: false, state: 'тверда' },
  
  // Кремній та сполуки
  { id: 'sicl4', name: 'Тетрахлорид кремнію', nameEn: 'Silicon Tetrachloride', formula: 'SiCl₄', category: 'сполука', emoji: '💨', description: 'Димуча рідина.', isBasic: false, state: 'рідина' },
  { id: 'sif4', name: 'Тетрафторид кремнію', nameEn: 'Silicon Tetrafluoride', formula: 'SiF₄', category: 'газ', emoji: '💨', description: 'Безбарвний газ.', isBasic: false, state: 'газ' },
  
  // Олово та свинець
  { id: 'sncl2', name: 'Хлорид олова(II)', nameEn: 'Tin(II) Chloride', formula: 'SnCl₂', category: 'сіль', emoji: '⬜', description: 'Відновник.', isBasic: false, state: 'тверда' },
  { id: 'pbno32', name: 'Нітрат свинцю', nameEn: 'Lead Nitrate', formula: 'Pb(NO₃)₂', category: 'сіль', emoji: '⬜', description: 'Токсична сіль.', isBasic: false, state: 'тверда' },
  { id: 'pbs', name: 'Сульфід свинцю', nameEn: 'Lead Sulfide', formula: 'PbS', category: 'сіль', emoji: '⬛', description: 'Галеніт, свинцева руда.', isBasic: false, state: 'тверда' },
  { id: 'pbi2', name: 'Йодид свинцю', nameEn: 'Lead Iodide', formula: 'PbI₂', category: 'сіль', emoji: '🟡', description: 'Жовтий осад.', isBasic: false, state: 'тверда' },
  
  // Ртуть
  { id: 'hgo', name: 'Оксид ртуті', nameEn: 'Mercury Oxide', formula: 'HgO', category: 'оксид', emoji: '🔴', description: 'Червоний порошок.', isBasic: false, state: 'тверда' },
  { id: 'hgs', name: 'Сульфід ртуті', nameEn: 'Mercury Sulfide', formula: 'HgS', category: 'сіль', emoji: '🔴', description: 'Кіновар, червоний пігмент.', isBasic: false, state: 'тверда' },
  
  // Золото та платина
  { id: 'aucl3', name: 'Хлорид золота', nameEn: 'Gold Chloride', formula: 'AuCl₃', category: 'сіль', emoji: '🟡', description: 'Червоні кристали.', isBasic: false, state: 'тверда' },
  { id: 'ptcl4', name: 'Хлорид платини', nameEn: 'Platinum Chloride', formula: 'PtCl₄', category: 'сіль', emoji: '🟤', description: 'Коричневі кристали.', isBasic: false, state: 'тверда' },
  
  // Миш'як, сурма, вісмут
  { id: 'as', name: 'Миш\'як', nameEn: 'Arsenic', formula: 'As', category: 'елемент', emoji: '☠️', description: 'Токсичний напівметал.', isBasic: false, state: 'тверда' },
  { id: 'as2o3', name: 'Оксид миш\'яку', nameEn: 'Arsenic Trioxide', formula: 'As₂O₃', category: 'оксид', emoji: '☠️', description: 'Білий миш\'як, отрута.', isBasic: false, state: 'тверда' },
  { id: 'sb', name: 'Сурма', nameEn: 'Antimony', formula: 'Sb', category: 'елемент', emoji: '⚪', description: 'Крихкий напівметал.', isBasic: false, state: 'тверда' },
  { id: 'sb2o3', name: 'Оксид сурми', nameEn: 'Antimony Trioxide', formula: 'Sb₂O₃', category: 'оксид', emoji: '⬜', description: 'Антипірен.', isBasic: false, state: 'тверда' },
  { id: 'bi', name: 'Вісмут', nameEn: 'Bismuth', formula: 'Bi', category: 'елемент', emoji: '🌈', description: 'Райдужний метал.', isBasic: false, state: 'тверда' },
  { id: 'bi2o3', name: 'Оксид вісмуту', nameEn: 'Bismuth Trioxide', formula: 'Bi₂O₃', category: 'оксид', emoji: '🟡', description: 'Жовтий порошок.', isBasic: false, state: 'тверда' },
  
  // Селен та телур
  { id: 'se', name: 'Селен', nameEn: 'Selenium', formula: 'Se', category: 'елемент', emoji: '🔴', description: 'Напівметал, фотоелемент.', isBasic: false, state: 'тверда' },
  { id: 'seo2', name: 'Оксид селену', nameEn: 'Selenium Dioxide', formula: 'SeO₂', category: 'оксид', emoji: '⬜', description: 'Білі кристали.', isBasic: false, state: 'тверда' },
  { id: 'te', name: 'Телур', nameEn: 'Tellurium', formula: 'Te', category: 'елемент', emoji: '⚪', description: 'Рідкісний напівметал.', isBasic: false, state: 'тверда' },
  { id: 'teo2', name: 'Оксид телуру', nameEn: 'Tellurium Dioxide', formula: 'TeO₂', category: 'оксид', emoji: '⬜', description: 'Білий порошок.', isBasic: false, state: 'тверда' },
  
  // Сульфіди
  { id: 'ag2s', name: 'Сульфід срібла', nameEn: 'Silver Sulfide', formula: 'Ag₂S', category: 'сіль', emoji: '⬛', description: 'Чорний наліт на сріблі.', isBasic: false, state: 'тверда' },
  { id: 'cus', name: 'Сульфід міді', nameEn: 'Copper Sulfide', formula: 'CuS', category: 'сіль', emoji: '⬛', description: 'Чорний осад.', isBasic: false, state: 'тверда' },
  { id: 'zns', name: 'Сульфід цинку', nameEn: 'Zinc Sulfide', formula: 'ZnS', category: 'сіль', emoji: '⬜', description: 'Сфалерит, люмінофор.', isBasic: false, state: 'тверда' },
  { id: 'mgs', name: 'Сульфід магнію', nameEn: 'Magnesium Sulfide', formula: 'MgS', category: 'сіль', emoji: '⬜', description: 'Біла речовина.', isBasic: false, state: 'тверда' },
  { id: 'al2s3', name: 'Сульфід алюмінію', nameEn: 'Aluminum Sulfide', formula: 'Al₂S₃', category: 'сіль', emoji: '🟡', description: 'Жовті кристали.', isBasic: false, state: 'тверда' },
  { id: 'na2s', name: 'Сульфід натрію', nameEn: 'Sodium Sulfide', formula: 'Na₂S', category: 'сіль', emoji: '⬜', description: 'Використовується в шкіряній промисловості.', isBasic: false, state: 'тверда' },
  { id: 'k2s', name: 'Сульфід калію', nameEn: 'Potassium Sulfide', formula: 'K₂S', category: 'сіль', emoji: '⬜', description: 'Жовті кристали.', isBasic: false, state: 'тверда' },
  { id: 'cas', name: 'Сульфід кальцію', nameEn: 'Calcium Sulfide', formula: 'CaS', category: 'сіль', emoji: '⬜', description: 'Люмінофор.', isBasic: false, state: 'тверда' },
  { id: 'bas', name: 'Сульфід барію', nameEn: 'Barium Sulfide', formula: 'BaS', category: 'сіль', emoji: '⬜', description: 'Депілятор.', isBasic: false, state: 'тверда' },
  
  // Нітрати
  { id: 'cuno32', name: 'Нітрат міді', nameEn: 'Copper Nitrate', formula: 'Cu(NO₃)₂', category: 'сіль', emoji: '🔵', description: 'Сині кристали.', isBasic: false, state: 'тверда' },
  { id: 'znno32', name: 'Нітрат цинку', nameEn: 'Zinc Nitrate', formula: 'Zn(NO₃)₂', category: 'сіль', emoji: '⬜', description: 'Безбарвні кристали.', isBasic: false, state: 'тверда' },
  { id: 'feno33', name: 'Нітрат заліза(III)', nameEn: 'Iron(III) Nitrate', formula: 'Fe(NO₃)₃', category: 'сіль', emoji: '🟤', description: 'Коричневі кристали.', isBasic: false, state: 'тверда' },
  
  // Сульфати
  { id: 'k2so4', name: 'Сульфат калію', nameEn: 'Potassium Sulfate', formula: 'K₂SO₄', category: 'сіль', emoji: '⬜', description: 'Добриво.', isBasic: false, state: 'тверда' },
  { id: 'na2so3', name: 'Сульфіт натрію', nameEn: 'Sodium Sulfite', formula: 'Na₂SO₃', category: 'сіль', emoji: '⬜', description: 'Консервант.', isBasic: false, state: 'тверда' },
  { id: 'al2so43', name: 'Сульфат алюмінію', nameEn: 'Aluminum Sulfate', formula: 'Al₂(SO₄)₃', category: 'сіль', emoji: '⬜', description: 'Галуни, коагулянт.', isBasic: false, state: 'тверда' },
  { id: 'nh42so4', name: 'Сульфат амонію', nameEn: 'Ammonium Sulfate', formula: '(NH₄)₂SO₄', category: 'сіль', emoji: '⬜', description: 'Добриво.', isBasic: false, state: 'тверда' },
  
  // Йодиди
  { id: 'agi', name: 'Йодид срібла', nameEn: 'Silver Iodide', formula: 'AgI', category: 'сіль', emoji: '🟡', description: 'Жовтий осад, фотографія.', isBasic: false, state: 'тверда' },
  
  // Хромати
  { id: 'na2cro4', name: 'Хромат натрію', nameEn: 'Sodium Chromate', formula: 'Na₂CrO₄', category: 'сіль', emoji: '🟡', description: 'Жовті кристали.', isBasic: false, state: 'тверда' },
  { id: 'na2cr2o7', name: 'Біхромат натрію', nameEn: 'Sodium Dichromate', formula: 'Na₂Cr₂O₇', category: 'сіль', emoji: '🟠', description: 'Оранжеві кристали, окисник.', isBasic: false, state: 'тверда' },
  
  // Станати
  { id: 'na2sno3', name: 'Станат натрію', nameEn: 'Sodium Stannate', formula: 'Na₂SnO₃', category: 'сіль', emoji: '⬜', description: 'Комплексна сіль олова.', isBasic: false, state: 'тверда' },
  
  // Органічні сполуки
  { id: 'ch3coona', name: 'Ацетат натрію', nameEn: 'Sodium Acetate', formula: 'CH₃COONa', category: 'сіль', emoji: '⬜', description: 'Оцтовокислий натрій.', isBasic: false, state: 'тверда' },
  { id: 'starch', name: 'Крохмаль', nameEn: 'Starch', formula: '(C₆H₁₀O₅)ₙ', category: 'сполука', emoji: '🌾', description: 'Полісахарид, індикатор на йод.', isBasic: false, state: 'тверда' },
  { id: 'i2starch', name: 'Комплекс йод-крохмаль', nameEn: 'Iodine-Starch Complex', formula: 'I₂·крохмаль', category: 'сполука', emoji: '🟣', description: 'Синє забарвлення.', isBasic: false, state: 'тверда' },
  
  // Спеціальні
  { id: 'heat', name: 'Тепло', nameEn: 'Heat', formula: 'Q', category: 'газ', emoji: '🔥', description: 'Енергія для реакцій.', isBasic: false, state: 'газ' },
];

export const getElementById = (id: string): Element | undefined => {
  return elements.find(el => el.id === id);
};

export const getBasicElements = (): Element[] => {
  return elements.filter(el => el.isBasic);
};

export const getElementsByCategory = (category: string): Element[] => {
  return elements.filter(el => el.category === category);
};
