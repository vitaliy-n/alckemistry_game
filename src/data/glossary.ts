import type { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'exothermic',
    term: 'Екзотермічна реакція',
    termEn: 'Exothermic reaction',
    definition: 'Хімічна реакція, яка супроводжується виділенням тепла в навколишнє середовище. Продукти реакції мають меншу енергію, ніж реагенти.',
    example: 'Горіння деревини, нейтралізація кислоти лугом',
    relatedTerms: ['endothermic', 'enthalpy']
  },
  {
    id: 'endothermic',
    term: 'Ендотермічна реакція',
    termEn: 'Endothermic reaction',
    definition: 'Хімічна реакція, яка супроводжується поглинанням тепла з навколишнього середовища. Продукти реакції мають більшу енергію, ніж реагенти.',
    example: 'Фотосинтез, розклад вапняку',
    relatedTerms: ['exothermic', 'enthalpy']
  },
  {
    id: 'catalyst',
    term: 'Каталізатор',
    termEn: 'Catalyst',
    definition: 'Речовина, яка прискорює хімічну реакцію, але сама не витрачається в процесі реакції. Каталізатор знижує енергію активації реакції.',
    example: 'Платина в каталітичному нейтралізаторі автомобіля, ферменти в організмі',
    relatedTerms: ['activation_energy', 'enzyme']
  },
  {
    id: 'synthesis',
    term: 'Синтез',
    termEn: 'Synthesis',
    definition: 'Тип хімічної реакції, при якій дві або більше речовин з\'єднуються, утворюючи одну нову речовину. A + B → AB',
    example: '2H₂ + O₂ → 2H₂O',
    relatedTerms: ['decomposition', 'reaction_types']
  },
  {
    id: 'decomposition',
    term: 'Розклад',
    termEn: 'Decomposition',
    definition: 'Тип хімічної реакції, при якій одна речовина розпадається на дві або більше простіших речовин. AB → A + B',
    example: '2H₂O₂ → 2H₂O + O₂',
    relatedTerms: ['synthesis', 'reaction_types']
  },
  {
    id: 'displacement',
    term: 'Заміщення',
    termEn: 'Displacement',
    definition: 'Тип хімічної реакції, при якій атоми одного елемента заміщують атоми іншого елемента в сполуці. A + BC → AC + B',
    example: 'Zn + CuSO₄ → ZnSO₄ + Cu',
    relatedTerms: ['activity_series', 'reaction_types']
  },
  {
    id: 'exchange',
    term: 'Обмін',
    termEn: 'Exchange/Double displacement',
    definition: 'Тип хімічної реакції, при якій два з\'єднання обмінюються частинами, утворюючи дві нові речовини. AB + CD → AD + CB',
    example: 'NaCl + AgNO₃ → AgCl + NaNO₃',
    relatedTerms: ['precipitation', 'reaction_types']
  },
  {
    id: 'neutralization',
    term: 'Нейтралізація',
    termEn: 'Neutralization',
    definition: 'Реакція між кислотою та основою, в результаті якої утворюються сіль та вода. Кислота + Основа → Сіль + Вода',
    example: 'HCl + NaOH → NaCl + H₂O',
    relatedTerms: ['acid', 'base', 'salt']
  },
  {
    id: 'valence',
    term: 'Валентність',
    termEn: 'Valence',
    definition: 'Здатність атома утворювати певну кількість хімічних зв\'язків з іншими атомами. Визначає кількість спільних електронних пар.',
    example: 'Водень має валентність 1, кисень - 2, азот - 3',
    relatedTerms: ['oxidation_state', 'chemical_bond']
  },
  {
    id: 'mole',
    term: 'Моль',
    termEn: 'Mole',
    definition: 'Одиниця вимірювання кількості речовини в системі СІ. Один моль містить 6.022×10²³ частинок (число Авогадро).',
    example: '1 моль води (H₂O) має масу 18 грамів',
    relatedTerms: ['avogadro_number', 'molar_mass']
  },
  {
    id: 'acid',
    term: 'Кислота',
    termEn: 'Acid',
    definition: 'Речовина, яка при дисоціації у воді утворює іони водню (H⁺). Кислоти мають кислий смак та змінюють колір індикаторів.',
    example: 'HCl (соляна кислота), H₂SO₄ (сірчана кислота)',
    relatedTerms: ['base', 'ph', 'neutralization']
  },
  {
    id: 'base',
    term: 'Основа (луг)',
    termEn: 'Base',
    definition: 'Речовина, яка при дисоціації у воді утворює гідроксид-іони (OH⁻). Основи мають мильний дотик та гіркий смак.',
    example: 'NaOH (їдкий натр), Ca(OH)₂ (гашене вапно)',
    relatedTerms: ['acid', 'ph', 'neutralization']
  },
  {
    id: 'salt',
    term: 'Сіль',
    termEn: 'Salt',
    definition: 'Іонна сполука, що складається з катіону металу та аніону кислотного залишку. Утворюється при нейтралізації кислоти основою.',
    example: 'NaCl (кухонна сіль), CaCO₃ (крейда)',
    relatedTerms: ['acid', 'base', 'neutralization']
  },
  {
    id: 'oxide',
    term: 'Оксид',
    termEn: 'Oxide',
    definition: 'Бінарна сполука елемента з киснем. Оксиди бувають основні, кислотні та амфотерні.',
    example: 'H₂O (вода), CO₂ (вуглекислий газ), Fe₂O₃ (іржа)',
    relatedTerms: ['oxygen', 'oxidation']
  },
  {
    id: 'oxidation',
    term: 'Окислення',
    termEn: 'Oxidation',
    definition: 'Процес втрати електронів атомом або іоном. Супроводжується підвищенням ступеня окислення.',
    example: 'Горіння заліза: 4Fe + 3O₂ → 2Fe₂O₃',
    relatedTerms: ['reduction', 'redox']
  },
  {
    id: 'reduction',
    term: 'Відновлення',
    termEn: 'Reduction',
    definition: 'Процес приєднання електронів атомом або іоном. Супроводжується зниженням ступеня окислення.',
    example: 'Виплавка заліза: Fe₂O₃ + 3CO → 2Fe + 3CO₂',
    relatedTerms: ['oxidation', 'redox']
  },
  {
    id: 'electrolysis',
    term: 'Електроліз',
    termEn: 'Electrolysis',
    definition: 'Процес розкладу речовини під дією електричного струму. Використовується для отримання чистих металів та газів.',
    example: 'Електроліз води: 2H₂O → 2H₂ + O₂',
    relatedTerms: ['electrolyte', 'cathode', 'anode']
  },
  {
    id: 'precipitation',
    term: 'Осадження',
    termEn: 'Precipitation',
    definition: 'Процес утворення нерозчинної речовини (осаду) при змішуванні двох розчинів. Позначається стрілкою вниз (↓).',
    example: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃',
    relatedTerms: ['solubility', 'exchange']
  },
  {
    id: 'chemical_equation',
    term: 'Хімічне рівняння',
    termEn: 'Chemical equation',
    definition: 'Умовний запис хімічної реакції за допомогою формул і символів. Має бути збалансованим за кількістю атомів кожного елемента.',
    example: '2H₂ + O₂ → 2H₂O',
    relatedTerms: ['coefficient', 'formula']
  },
  {
    id: 'coefficient',
    term: 'Коефіцієнт',
    termEn: 'Coefficient',
    definition: 'Число перед формулою в хімічному рівнянні, що показує кількість молекул або молів речовини.',
    example: 'У рівнянні 2H₂O число 2 є коефіцієнтом',
    relatedTerms: ['chemical_equation', 'index']
  },
  {
    id: 'index',
    term: 'Індекс',
    termEn: 'Subscript/Index',
    definition: 'Число внизу праворуч від символу елемента, що показує кількість атомів цього елемента в молекулі.',
    example: 'У формулі H₂O число 2 є індексом при водні',
    relatedTerms: ['formula', 'coefficient']
  },
  {
    id: 'ion',
    term: 'Іон',
    termEn: 'Ion',
    definition: 'Атом або група атомів, що мають електричний заряд внаслідок втрати або приєднання електронів.',
    example: 'Na⁺ (катіон натрію), Cl⁻ (аніон хлору)',
    relatedTerms: ['cation', 'anion', 'electrolyte']
  },
  {
    id: 'molecule',
    term: 'Молекула',
    termEn: 'Molecule',
    definition: 'Найменша частинка речовини, яка зберігає її хімічні властивості. Складається з двох або більше атомів.',
    example: 'H₂O, CO₂, O₂',
    relatedTerms: ['atom', 'compound']
  },
  {
    id: 'atom',
    term: 'Атом',
    termEn: 'Atom',
    definition: 'Найменша частинка хімічного елемента, яка є носієм його властивостей. Складається з ядра та електронів.',
    example: 'Атом водню (H), атом кисню (O)',
    relatedTerms: ['electron', 'proton', 'neutron']
  },
  {
    id: 'element',
    term: 'Хімічний елемент',
    termEn: 'Chemical element',
    definition: 'Вид атомів з однаковим зарядом ядра. Кожен елемент має свій символ та атомний номер.',
    example: 'Водень (H), Кисень (O), Залізо (Fe)',
    relatedTerms: ['periodic_table', 'atom']
  },
  {
    id: 'compound',
    term: 'Хімічна сполука',
    termEn: 'Chemical compound',
    definition: 'Речовина, що складається з атомів двох або більше елементів, з\'єднаних хімічним зв\'язком.',
    example: 'Вода (H₂O), кухонна сіль (NaCl)',
    relatedTerms: ['element', 'mixture']
  },
  {
    id: 'mixture',
    term: 'Суміш',
    termEn: 'Mixture',
    definition: 'Сукупність двох або більше речовин, які не вступають у хімічну реакцію і зберігають свої властивості.',
    example: 'Повітря (суміш газів), морська вода (розчин солей)',
    relatedTerms: ['compound', 'solution']
  },
  {
    id: 'solution',
    term: 'Розчин',
    termEn: 'Solution',
    definition: 'Однорідна суміш двох або більше речовин. Складається з розчинника та розчиненої речовини.',
    example: 'Солона вода, цукровий сироп',
    relatedTerms: ['solvent', 'solute', 'concentration']
  },
  {
    id: 'concentration',
    term: 'Концентрація',
    termEn: 'Concentration',
    definition: 'Величина, що показує вміст розчиненої речовини в розчині. Може виражатися у відсотках, молях на літр тощо.',
    example: '5% розчин солі, 0.1 М розчин HCl',
    relatedTerms: ['solution', 'molarity']
  }
];

export const getGlossaryTermById = (id: string): GlossaryTerm | undefined => {
  return glossaryTerms.find(t => t.id === id);
};

export const searchGlossary = (query: string): GlossaryTerm[] => {
  const lowerQuery = query.toLowerCase();
  return glossaryTerms.filter(term =>
    term.term.toLowerCase().includes(lowerQuery) ||
    term.termEn.toLowerCase().includes(lowerQuery) ||
    term.definition.toLowerCase().includes(lowerQuery)
  );
};
