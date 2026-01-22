import type { Recipe } from '../types';

export const recipes: Recipe[] = [
  // Прості синтези з воднем
  { id: 'r1', ingredients: ['h2', 'o2'], result: 'h2o', equation: '2H₂ + O₂ → 2H₂O', reactionType: 'синтез', explanation: 'Водень згоряє в кисні з утворенням води. Це одна з найвідоміших хімічних реакцій.', conditions: 'Потрібна іскра для початку реакції', energy: 'екзотермічна', application: 'Паливні елементи космічних кораблів' },
  { id: 'r2', ingredients: ['h2', 'cl2'], result: 'hcl', equation: 'H₂ + Cl₂ → 2HCl', reactionType: 'синтез', explanation: 'Водень реагує з хлором, утворюючи хлоридну кислоту.', conditions: 'Реакція на світлі', energy: 'екзотермічна', application: 'Виробництво соляної кислоти' },
  { id: 'r3', ingredients: ['h2', 's'], result: 'h2s', equation: 'H₂ + S → H₂S', reactionType: 'синтез', explanation: 'Водень з\'єднується з сіркою, утворюючи сірководень - газ з неприємним запахом.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Хімічний аналіз' },
  { id: 'r4', ingredients: ['h2', 'n2'], result: 'nh3', equation: '3H₂ + N₂ → 2NH₃', reactionType: 'синтез', explanation: 'Синтез аміаку - процес Габера-Боша, один з найважливіших промислових процесів.', conditions: 'Високий тиск, температура, каталізатор', energy: 'екзотермічна', application: 'Виробництво добрив' },
  
  // Синтези з киснем (горіння)
  { id: 'r5', ingredients: ['c', 'o2'], result: 'co2', equation: 'C + O₂ → CO₂', reactionType: 'синтез', explanation: 'Вуглець повністю згоряє в кисні з утворенням вуглекислого газу.', conditions: 'Нагрівання до температури займання', energy: 'екзотермічна', application: 'Горіння палива' },
  { id: 'r6', ingredients: ['s', 'o2'], result: 'so2', equation: 'S + O₂ → SO₂', reactionType: 'синтез', explanation: 'Сірка горить у кисні блакитним полум\'ям, утворюючи сірчистий газ.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво сірчаної кислоти' },
  { id: 'r7', ingredients: ['fe', 'o2'], result: 'fe2o3', equation: '4Fe + 3O₂ → 2Fe₂O₃', reactionType: 'синтез', explanation: 'Залізо окислюється киснем, утворюючи іржу - оксид заліза(III).', conditions: 'Волога присутність, повільний процес', energy: 'екзотермічна', application: 'Корозія металів' },
  { id: 'r8', ingredients: ['mg', 'o2'], result: 'mgo', equation: '2Mg + O₂ → 2MgO', reactionType: 'синтез', explanation: 'Магній горить яскравим білим полум\'ям, утворюючи оксид магнію.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Сигнальні ракети' },
  { id: 'r9', ingredients: ['na', 'o2'], result: 'na2o', equation: '4Na + O₂ → 2Na₂O', reactionType: 'синтез', explanation: 'Натрій легко окислюється на повітрі.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво їдкого натру' },
  { id: 'r10', ingredients: ['ca', 'o2'], result: 'cao', equation: '2Ca + O₂ → 2CaO', reactionType: 'синтез', explanation: 'Кальцій згоряє в кисні з утворенням негашеного вапна.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво вапна' },
  { id: 'r11', ingredients: ['k', 'o2'], result: 'k2o', equation: '4K + O₂ → 2K₂O', reactionType: 'синтез', explanation: 'Калій бурхливо реагує з киснем.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво калійних сполук' },
  
  // Реакції металів з неметалами
  { id: 'r12', ingredients: ['na', 'cl2'], result: 'nacl', equation: '2Na + Cl₂ → 2NaCl', reactionType: 'синтез', explanation: 'Натрій бурхливо реагує з хлором, утворюючи кухонну сіль.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Харчова промисловість' },
  { id: 'r13', ingredients: ['fe', 's'], result: 'fes', equation: 'Fe + S → FeS', reactionType: 'синтез', explanation: 'Залізо з\'єднується з сіркою при нагріванні, утворюючи сульфід заліза.', conditions: 'Нагрівання суміші', energy: 'екзотермічна', application: 'Демонстрація хімічних реакцій' },
  { id: 'r14', ingredients: ['ca', 'cl2'], result: 'cacl2', equation: 'Ca + Cl₂ → CaCl₂', reactionType: 'синтез', explanation: 'Кальцій реагує з хлором, утворюючи хлорид кальцію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Антиобледенювач доріг' },
  { id: 'r15', ingredients: ['mg', 'cl2'], result: 'mgcl2', equation: 'Mg + Cl₂ → MgCl₂', reactionType: 'синтез', explanation: 'Магній реагує з хлором з яскравим спалахом.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво магнію електролізом' },
  { id: 'r16', ingredients: ['k', 'cl2'], result: 'kcl', equation: '2K + Cl₂ → 2KCl', reactionType: 'синтез', explanation: 'Калій реагує з хлором, утворюючи хлорид калію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Замінник кухонної солі' },
  
  // Реакції з водою
  { id: 'r17', ingredients: ['na', 'h2o'], result: 'naoh', equation: '2Na + 2H₂O → 2NaOH + H₂↑', reactionType: 'заміщення', explanation: 'Натрій бурхливо реагує з водою, виділяючи водень та утворюючи луг.', conditions: 'Кімнатна температура, ОБЕРЕЖНО!', energy: 'екзотермічна', application: 'Демонстрація реактивності лужних металів' },
  { id: 'r18', ingredients: ['k', 'h2o'], result: 'koh', equation: '2K + 2H₂O → 2KOH + H₂↑', reactionType: 'заміщення', explanation: 'Калій ще більш бурхливо реагує з водою, часто спалахує.', conditions: 'Кімнатна температура, НЕБЕЗПЕЧНО!', energy: 'екзотермічна', application: 'Демонстрація' },
  { id: 'r19', ingredients: ['cao', 'h2o'], result: 'caoh2', equation: 'CaO + H₂O → Ca(OH)₂', reactionType: 'синтез', explanation: 'Негашене вапно гаситься водою з виділенням тепла.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Будівництво' },
  { id: 'r20', ingredients: ['mgo', 'h2o'], result: 'mgoh2', equation: 'MgO + H₂O → Mg(OH)₂', reactionType: 'синтез', explanation: 'Оксид магнію повільно реагує з водою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво антацидів' },
  { id: 'r21', ingredients: ['na2o', 'h2o'], result: 'naoh', equation: 'Na₂O + H₂O → 2NaOH', reactionType: 'синтез', explanation: 'Оксид натрію бурхливо реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво їдкого натру' },
  { id: 'r22', ingredients: ['k2o', 'h2o'], result: 'koh', equation: 'K₂O + H₂O → 2KOH', reactionType: 'синтез', explanation: 'Оксид калію реагує з водою з утворенням лугу.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво їдкого калію' },
  { id: 'r23', ingredients: ['co2', 'h2o'], result: 'h2co3', equation: 'CO₂ + H₂O → H₂CO₃', reactionType: 'синтез', explanation: 'Вуглекислий газ розчиняється у воді, утворюючи слабку вугільну кислоту.', conditions: 'Тиск', energy: 'ендотермічна', application: 'Газовані напої' },
  { id: 'r24', ingredients: ['so2', 'h2o'], result: 'h2so3', equation: 'SO₂ + H₂O → H₂SO₃', reactionType: 'синтез', explanation: 'Сірчистий газ розчиняється у воді з утворенням сірчистої кислоти.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Кислотні дощі' },
  { id: 'r25', ingredients: ['so3', 'h2o'], result: 'h2so4', equation: 'SO₃ + H₂O → H₂SO₄', reactionType: 'синтез', explanation: 'Сірчаний ангідрид жадібно поглинає воду, утворюючи сірчану кислоту.', conditions: 'Бурхлива реакція', energy: 'екзотермічна', application: 'Виробництво сірчаної кислоти' },
  
  // Нейтралізація (кислота + основа)
  { id: 'r26', ingredients: ['hcl', 'naoh'], result: 'nacl', equation: 'HCl + NaOH → NaCl + H₂O', reactionType: 'нейтралізація', explanation: 'Класична реакція нейтралізації - кислота реагує з основою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Титрування, виробництво солей' },
  { id: 'r27', ingredients: ['hcl', 'koh'], result: 'kcl', equation: 'HCl + KOH → KCl + H₂O', reactionType: 'нейтралізація', explanation: 'Хлоридна кислота нейтралізується гідроксидом калію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду калію' },
  { id: 'r28', ingredients: ['h2so4', 'naoh'], result: 'na2so4', equation: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Сірчана кислота нейтралізується їдким натром.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво глауберової солі' },
  { id: 'r29', ingredients: ['h2so4', 'caoh2'], result: 'caso4', equation: 'H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється гіпс - важливий будівельний матеріал.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гіпсу' },
  { id: 'r30', ingredients: ['hcl', 'caoh2'], result: 'cacl2', equation: '2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Гашене вапно нейтралізує соляну кислоту.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду кальцію' },
  { id: 'r31', ingredients: ['hcl', 'mgoh2'], result: 'mgcl2', equation: '2HCl + Mg(OH)₂ → MgCl₂ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Гідроксид магнію нейтралізує кислоту в шлунку.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Антациди' },
  { id: 'r32', ingredients: ['h2so4', 'mgoh2'], result: 'mgso4', equation: 'H₂SO₄ + Mg(OH)₂ → MgSO₄ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється англійська сіль.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Медицина, косметика' },
  
  // Реакції з карбонатами
  { id: 'r33', ingredients: ['hcl', 'caco3'], result: 'cacl2', equation: '2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Кислота реагує з крейдою, виділяючи вуглекислий газ (шипить).', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Гасіння вапняку' },
  { id: 'r34', ingredients: ['hcl', 'na2co3'], result: 'nacl', equation: '2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Сода реагує з кислотою, виділяючи вуглекислий газ.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Демонстрація, гасіння соди' },
  { id: 'r35', ingredients: ['hcl', 'nahco3'], result: 'nacl', equation: 'HCl + NaHCO₃ → NaCl + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Харчова сода гасіться кислотою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Кулінарія, вогнегасники' },
  
  // Утворення карбонатів
  { id: 'r36', ingredients: ['caoh2', 'co2'], result: 'caco3', equation: 'Ca(OH)₂ + CO₂ → CaCO₃ + H₂O', reactionType: 'синтез', explanation: 'Вапняна вода мутніє від вуглекислого газу.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виявлення CO₂' },
  { id: 'r37', ingredients: ['naoh', 'co2'], result: 'na2co3', equation: '2NaOH + CO₂ → Na₂CO₃ + H₂O', reactionType: 'синтез', explanation: 'Луг поглинає вуглекислий газ.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Очистка газів від CO₂' },
  
  // Реакції заліза
  { id: 'r38', ingredients: ['fe', 'hcl'], result: 'fecl2', equation: 'Fe + 2HCl → FeCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Залізо розчиняється в соляній кислоті з виділенням водню.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво солей заліза' },
  { id: 'r39', ingredients: ['fe', 'h2so4'], result: 'feso4', equation: 'Fe + H₂SO₄ → FeSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Залізо розчиняється в розбавленій сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво залізного купоросу' },
  { id: 'r40', ingredients: ['feo', 'h2o'], result: 'feoh2', equation: 'FeO + H₂O → Fe(OH)₂', reactionType: 'синтез', explanation: 'Оксид заліза(II) реагує з водою.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Хімічний синтез' },
  { id: 'r41', ingredients: ['fe2o3', 'hcl'], result: 'fecl3', equation: 'Fe₂O₃ + 6HCl → 2FeCl₃ + 3H₂O', reactionType: 'обмін', explanation: 'Іржа розчиняється в соляній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Очистка металів від іржі' },
  { id: 'r42', ingredients: ['fecl2', 'cl2'], result: 'fecl3', equation: '2FeCl₂ + Cl₂ → 2FeCl₃', reactionType: 'синтез', explanation: 'Хлорид заліза(II) окислюється хлором.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду заліза(III)' },
  
  // Реакції міді
  { id: 'r43', ingredients: ['cu', 'o2'], result: 'cuo', equation: '2Cu + O₂ → 2CuO', reactionType: 'синтез', explanation: 'Мідь окислюється при нагріванні, чорніє.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво оксиду міді' },
  { id: 'r44', ingredients: ['cu', 'h2so4'], result: 'cuso4', equation: 'Cu + 2H₂SO₄(конц.) → CuSO₄ + SO₂↑ + 2H₂O', reactionType: 'заміщення', explanation: 'Мідь розчиняється тільки в концентрованій сірчаній кислоті.', conditions: 'Нагрівання, конц. кислота', energy: 'екзотермічна', application: 'Виробництво мідного купоросу' },
  { id: 'r45', ingredients: ['cuo', 'h2so4'], result: 'cuso4', equation: 'CuO + H₂SO₄ → CuSO₄ + H₂O', reactionType: 'обмін', explanation: 'Оксид міді розчиняється в сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво мідного купоросу' },
  { id: 'r46', ingredients: ['cuo', 'hcl'], result: 'cucl2', equation: 'CuO + 2HCl → CuCl₂ + H₂O', reactionType: 'обмін', explanation: 'Оксид міді розчиняється в соляній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду міді' },
  { id: 'r47', ingredients: ['cuso4', 'naoh'], result: 'cuoh2', equation: 'CuSO₄ + 2NaOH → Cu(OH)₂↓ + Na₂SO₄', reactionType: 'обмін', explanation: 'Випадає блакитний осад гідроксиду міді.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на мідь' },
  
  // Реакції цинку
  { id: 'r48', ingredients: ['zn', 'o2'], result: 'zno', equation: '2Zn + O₂ → 2ZnO', reactionType: 'синтез', explanation: 'Цинк горить яскравим блакитно-зеленим полум\'ям.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво цинкових білил' },
  { id: 'r49', ingredients: ['zn', 'hcl'], result: 'zncl2', equation: 'Zn + 2HCl → ZnCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Цинк активно розчиняється в соляній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Лабораторне отримання водню' },
  { id: 'r50', ingredients: ['zn', 'h2so4'], result: 'znso4', equation: 'Zn + H₂SO₄ → ZnSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Цинк розчиняється в розбавленій сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво цинкового купоросу' },
  { id: 'r51', ingredients: ['zno', 'h2o'], result: 'znoh2', equation: 'ZnO + H₂O → Zn(OH)₂', reactionType: 'синтез', explanation: 'Оксид цинку повільно реагує з водою.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Хімічний синтез' },
  { id: 'r52', ingredients: ['zno', 'hcl'], result: 'zncl2', equation: 'ZnO + 2HCl → ZnCl₂ + H₂O', reactionType: 'обмін', explanation: 'Оксид цинку розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво солей цинку' },
  { id: 'r53', ingredients: ['zno', 'naoh'], result: 'znoh2', equation: 'ZnO + 2NaOH + H₂O → Na₂[Zn(OH)₄]', reactionType: 'обмін', explanation: 'Оксид цинку амфотерний - розчиняється і в лугах.', conditions: 'Надлишок лугу', energy: 'ендотермічна', application: 'Демонстрація амфотерності' },
  
  // Реакції алюмінію
  { id: 'r54', ingredients: ['al', 'o2'], result: 'al2o3', equation: '4Al + 3O₂ → 2Al₂O₃', reactionType: 'синтез', explanation: 'Алюміній горить сліпучим білим полум\'ям.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Термітна суміш' },
  { id: 'r55', ingredients: ['al', 'hcl'], result: 'alcl3', equation: '2Al + 6HCl → 2AlCl₃ + 3H₂↑', reactionType: 'заміщення', explanation: 'Алюміній розчиняється в соляній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду алюмінію' },
  { id: 'r56', ingredients: ['al2o3', 'hcl'], result: 'alcl3', equation: 'Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O', reactionType: 'обмін', explanation: 'Оксид алюмінію розчиняється в кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво солей алюмінію' },
  { id: 'r57', ingredients: ['al2o3', 'naoh'], result: 'aloh3', equation: 'Al₂O₃ + 6NaOH → 2Na₃AlO₃ + 3H₂O', reactionType: 'обмін', explanation: 'Оксид алюмінію амфотерний - розчиняється в лугах.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Демонстрація амфотерності' },
  { id: 'r58', ingredients: ['alcl3', 'naoh'], result: 'aloh3', equation: 'AlCl₃ + 3NaOH → Al(OH)₃↓ + 3NaCl', reactionType: 'обмін', explanation: 'Випадає білий драглистий осад гідроксиду алюмінію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Очистка води' },
  
  // Реакції срібла
  { id: 'r59', ingredients: ['ag', 'hno3'], result: 'agno3', equation: '3Ag + 4HNO₃ → 3AgNO₃ + NO↑ + 2H₂O', reactionType: 'заміщення', explanation: 'Срібло розчиняється тільки в азотній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво нітрату срібла' },
  { id: 'r60', ingredients: ['agno3', 'nacl'], result: 'agcl', equation: 'AgNO₃ + NaCl → AgCl↓ + NaNO₃', reactionType: 'обмін', explanation: 'Випадає білий сирнистий осад хлориду срібла.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на хлориди' },
  { id: 'r61', ingredients: ['agno3', 'hcl'], result: 'agcl', equation: 'AgNO₃ + HCl → AgCl↓ + HNO₃', reactionType: 'обмін', explanation: 'Утворюється нерозчинний хлорид срібла.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на срібло' },
  
  // Реакції барію
  { id: 'r62', ingredients: ['ba', 'o2'], result: 'baso4', equation: '2Ba + O₂ → 2BaO', reactionType: 'синтез', explanation: 'Барій легко окислюється на повітрі.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r63', ingredients: ['ba', 'h2o'], result: 'baoh2', equation: 'Ba + 2H₂O → Ba(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Барій реагує з водою, утворюючи луг.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гідроксиду барію' },
  { id: 'r64', ingredients: ['ba', 'cl2'], result: 'bacl2', equation: 'Ba + Cl₂ → BaCl₂', reactionType: 'синтез', explanation: 'Барій реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду барію' },
  { id: 'r65', ingredients: ['bacl2', 'h2so4'], result: 'baso4', equation: 'BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl', reactionType: 'обмін', explanation: 'Випадає білий осад сульфату барію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на сульфати' },
  { id: 'r66', ingredients: ['baoh2', 'h2so4'], result: 'baso4', equation: 'Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється нерозчинний сульфат барію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Рентгеноконтрастна речовина' },
  
  // Додаткові синтези
  { id: 'r67', ingredients: ['so2', 'o2'], result: 'so3', equation: '2SO₂ + O₂ → 2SO₃', reactionType: 'синтез', explanation: 'Окислення сірчистого газу до сірчаного ангідриду.', conditions: 'Каталізатор V₂O₅, нагрівання', energy: 'екзотермічна', application: 'Контактний метод виробництва сірчаної кислоти' },
  { id: 'r68', ingredients: ['no', 'o2'], result: 'no2', equation: '2NO + O₂ → 2NO₂', reactionType: 'синтез', explanation: 'Безбарвний оксид азоту(II) на повітрі швидко буріє.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво азотної кислоти' },
  { id: 'r69', ingredients: ['n2', 'o2'], result: 'no', equation: 'N₂ + O₂ → 2NO', reactionType: 'синтез', explanation: 'Азот з киснем реагують тільки при дуже високій температурі.', conditions: 'Електрична дуга, 3000°C', energy: 'ендотермічна', application: 'Грози в атмосфері' },
  
  // Реакції з аміаком
  { id: 'r70', ingredients: ['nh3', 'hcl'], result: 'nh4cl', equation: 'NH₃ + HCl → NH₄Cl', reactionType: 'синтез', explanation: 'Аміак з\'єднується з хлоридною кислотою, утворюючи білий дим.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво нашатирю' },
  { id: 'r71', ingredients: ['nh3', 'hno3'], result: 'nh4no3', equation: 'NH₃ + HNO₃ → NH₄NO₃', reactionType: 'синтез', explanation: 'Аміак нейтралізується азотною кислотою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво аміачної селітри' },
  { id: 'r72', ingredients: ['nh3', 'h2o'], result: 'nh4oh', equation: 'NH₃ + H₂O ⇌ NH₄OH', reactionType: 'синтез', explanation: 'Аміак розчиняється у воді, утворюючи слабку основу - гідроксид амонію (нашатирний спирт).', conditions: 'Кімнатна температура', energy: 'ендотермічна', application: 'Нашатирний спирт, побутова хімія' },
  
  // Реакції з азотною кислотою
  { id: 'r73', ingredients: ['hno3', 'naoh'], result: 'nano3', equation: 'HNO₃ + NaOH → NaNO₃ + H₂O', reactionType: 'нейтралізація', explanation: 'Азотна кислота нейтралізується їдким натром.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво натрієвої селітри' },
  { id: 'r74', ingredients: ['hno3', 'koh'], result: 'kno3', equation: 'HNO₃ + KOH → KNO₃ + H₂O', reactionType: 'нейтралізація', explanation: 'Азотна кислота нейтралізується їдким калієм.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво калійної селітри' },
  
  // Реакції фосфору
  { id: 'r75', ingredients: ['p', 'o2'], result: 'p2o5', equation: '4P + 5O₂ → 2P₂O₅', reactionType: 'синтез', explanation: 'Фосфор горить яскравим полум\'ям, утворюючи білий дим.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво фосфорної кислоти' },
  { id: 'r76', ingredients: ['p2o5', 'h2o'], result: 'h3po4', equation: 'P₂O₅ + 3H₂O → 2H₃PO₄', reactionType: 'синтез', explanation: 'Оксид фосфору жадібно поглинає воду.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво фосфорної кислоти' },
  
  // Реакції кремнію
  { id: 'r77', ingredients: ['si', 'o2'], result: 'sio2', equation: 'Si + O₂ → SiO₂', reactionType: 'синтез', explanation: 'Кремній окислюється до діоксиду кремнію.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r78', ingredients: ['sio2', 'naoh'], result: 'na2sio3', equation: 'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O', reactionType: 'обмін', explanation: 'Кварц розчиняється в розплавленому лузі.', conditions: 'Плавлення', energy: 'ендотермічна', application: 'Виробництво рідкого скла' },
  
  // Органічні реакції
  { id: 'r79', ingredients: ['c', 'h2'], result: 'ch4', equation: 'C + 2H₂ → CH₄', reactionType: 'синтез', explanation: 'Синтез метану з вуглецю та водню.', conditions: 'Високий тиск, каталізатор', energy: 'екзотермічна', application: 'Виробництво синтез-газу' },
  { id: 'r80', ingredients: ['ch4', 'o2'], result: 'co2', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', reactionType: 'синтез', explanation: 'Повне згоряння метану.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Спалювання природного газу' },
  { id: 'r81', ingredients: ['c2h5oh', 'o2'], result: 'co2', equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O', reactionType: 'синтез', explanation: 'Етанол згоряє блакитним полум\'ям.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Біопаливо' },
  
  // Реакції свинцю
  { id: 'r82', ingredients: ['pb', 'o2'], result: 'pbo', equation: '2Pb + O₂ → 2PbO', reactionType: 'синтез', explanation: 'Свинець окислюється при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво свинцевих сполук' },
  
  // Реакції з хлором
  { id: 'r83', ingredients: ['naoh', 'cl2'], result: 'naclo', equation: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O', reactionType: 'обмін', explanation: 'Хлор реагує з холодним розчином лугу.', conditions: 'Холодний розчин', energy: 'екзотермічна', application: 'Виробництво відбілювача' },
  { id: 'r84', ingredients: ['fe', 'cl2'], result: 'fecl3', equation: '2Fe + 3Cl₂ → 2FeCl₃', reactionType: 'синтез', explanation: 'Залізо горить у хлорі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду заліза(III)' },
  { id: 'r85', ingredients: ['cu', 'cl2'], result: 'cucl2', equation: 'Cu + Cl₂ → CuCl₂', reactionType: 'синтез', explanation: 'Мідь реагує з хлором при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду міді' },
  { id: 'r86', ingredients: ['al', 'cl2'], result: 'alcl3', equation: '2Al + 3Cl₂ → 2AlCl₃', reactionType: 'синтез', explanation: 'Алюміній горить у хлорі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду алюмінію' },
  { id: 'r87', ingredients: ['zn', 'cl2'], result: 'zncl2', equation: 'Zn + Cl₂ → ZnCl₂', reactionType: 'синтез', explanation: 'Цинк реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду цинку' },
  
  // Додаткові реакції обміну
  { id: 'r88', ingredients: ['feso4', 'naoh'], result: 'feoh2', equation: 'FeSO₄ + 2NaOH → Fe(OH)₂↓ + Na₂SO₄', reactionType: 'обмін', explanation: 'Випадає білий осад, який швидко зеленіє і буріє.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на залізо(II)' },
  { id: 'r89', ingredients: ['fecl3', 'naoh'], result: 'feoh3', equation: 'FeCl₃ + 3NaOH → Fe(OH)₃↓ + 3NaCl', reactionType: 'обмін', explanation: 'Випадає бурий осад гідроксиду заліза(III).', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Якісна реакція на залізо(III)' },
  { id: 'r90', ingredients: ['cuso4', 'fe'], result: 'feso4', equation: 'CuSO₄ + Fe → FeSO₄ + Cu↓', reactionType: 'заміщення', explanation: 'Залізо витісняє мідь з розчину, вкривається червоним нальотом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Цементація міді' },
  
  // Термічні реакції
  { id: 'r91', ingredients: ['feoh2', 'o2'], result: 'feoh3', equation: '4Fe(OH)₂ + O₂ + 2H₂O → 4Fe(OH)₃', reactionType: 'синтез', explanation: 'Гідроксид заліза(II) окислюється на повітрі.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Процес іржавіння' },
  { id: 'r92', ingredients: ['feo', 'o2'], result: 'fe2o3', equation: '4FeO + O₂ → 2Fe₂O₃', reactionType: 'синтез', explanation: 'Оксид заліза(II) окислюється до оксиду заліза(III).', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Металургія' },
  { id: 'r93', ingredients: ['feo', 'fe2o3'], result: 'fe3o4', equation: 'FeO + Fe₂O₃ → Fe₃O₄', reactionType: 'синтез', explanation: 'Утворюється магнетит - магнітна залізна руда.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Металургія' },
  
  // Реакції з сіллю
  { id: 'r94', ingredients: ['nacl', 'h2so4'], result: 'hcl', equation: '2NaCl + H₂SO₄ → Na₂SO₄ + 2HCl↑', reactionType: 'обмін', explanation: 'Виділяється хлороводень при нагріванні.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Лабораторне отримання HCl' },
  { id: 'r95', ingredients: ['caco3', 'h2so4'], result: 'caso4', equation: 'CaCO₃ + H₂SO₄ → CaSO₄ + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Крейда розчиняється в сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гіпсу' },
  
  // Витіснення металів
  { id: 'r96', ingredients: ['zn', 'cuso4'], result: 'znso4', equation: 'Zn + CuSO₄ → ZnSO₄ + Cu↓', reactionType: 'заміщення', explanation: 'Цинк витісняє мідь з розчину.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Отримання міді' },
  { id: 'r97', ingredients: ['mg', 'hcl'], result: 'mgcl2', equation: 'Mg + 2HCl → MgCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Магній активно розчиняється в соляній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Лабораторне отримання водню' },
  { id: 'r98', ingredients: ['ca', 'hcl'], result: 'cacl2', equation: 'Ca + 2HCl → CaCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кальцій розчиняється в кислоті з виділенням водню.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Отримання водню' },
  { id: 'r99', ingredients: ['al', 'h2so4'], result: 'al2so43', equation: '2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂↑', reactionType: 'заміщення', explanation: 'Алюміній розчиняється в розбавленій сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво солей алюмінію' },
  { id: 'r100', ingredients: ['cu', 'agno3'], result: 'ag', equation: 'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag↓', reactionType: 'заміщення', explanation: 'Мідь витісняє срібло з розчину, утворюючи срібне дерево.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Демонстрація активності металів' },
  { id: 'r101', ingredients: ['fe', 'cuso4'], result: 'cu', equation: 'Fe + CuSO₄ → FeSO₄ + Cu↓', reactionType: 'заміщення', explanation: 'Залізо витісняє мідь, вкриваючись червоним нальотом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Цементація міді' },
  { id: 'r102', ingredients: ['zn', 'feso4'], result: 'fe', equation: 'Zn + FeSO₄ → ZnSO₄ + Fe↓', reactionType: 'заміщення', explanation: 'Цинк витісняє залізо з розчину.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Ряд активності металів' },
  { id: 'r103', ingredients: ['mg', 'znso4'], result: 'zn', equation: 'Mg + ZnSO₄ → MgSO₄ + Zn↓', reactionType: 'заміщення', explanation: 'Магній витісняє цинк з розчину.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Демонстрація активності' },
  { id: 'r104', ingredients: ['na', 'h2'], result: 'nah', equation: '2Na + H₂ → 2NaH', reactionType: 'синтез', explanation: 'Натрій реагує з воднем при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Відновник в органічному синтезі' },
  { id: 'r105', ingredients: ['ca', 'h2'], result: 'cah2', equation: 'Ca + H₂ → CaH₂', reactionType: 'синтез', explanation: 'Кальцій утворює гідрид при високій температурі.', conditions: 'Висока температура', energy: 'екзотермічна', application: 'Джерело водню' },
  { id: 'r106', ingredients: ['li', 'o2'], result: 'li2o', equation: '4Li + O₂ → 2Li₂O', reactionType: 'синтез', explanation: 'Літій легко окислюється на повітрі.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво літієвих сполук' },
  { id: 'r107', ingredients: ['li', 'h2o'], result: 'lioh', equation: '2Li + 2H₂O → 2LiOH + H₂↑', reactionType: 'заміщення', explanation: 'Літій реагує з водою спокійніше за натрій.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гідроксиду літію' },
  { id: 'r108', ingredients: ['li', 'cl2'], result: 'licl', equation: '2Li + Cl₂ → 2LiCl', reactionType: 'синтез', explanation: 'Літій реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлориду літію' },
  { id: 'r109', ingredients: ['rb', 'o2'], result: 'rb2o', equation: '4Rb + O₂ → 2Rb₂O', reactionType: 'синтез', explanation: 'Рубідій дуже легко окислюється.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r110', ingredients: ['rb', 'h2o'], result: 'rboh', equation: '2Rb + 2H₂O → 2RbOH + H₂↑', reactionType: 'заміщення', explanation: 'Рубідій вибухово реагує з водою.', conditions: 'НЕБЕЗПЕЧНО!', energy: 'екзотермічна', application: 'Демонстрація' },
  { id: 'r111', ingredients: ['cs', 'o2'], result: 'cs2o', equation: '4Cs + O₂ → 2Cs₂O', reactionType: 'синтез', explanation: 'Цезій миттєво окислюється на повітрі.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r112', ingredients: ['cs', 'h2o'], result: 'csoh', equation: '2Cs + 2H₂O → 2CsOH + H₂↑', reactionType: 'заміщення', explanation: 'Цезій найбільш бурхливо реагує з водою.', conditions: 'ВИБУХОНЕБЕЗПЕЧНО!', energy: 'екзотермічна', application: 'Демонстрація' },
  { id: 'r113', ingredients: ['be', 'o2'], result: 'beo', equation: '2Be + O₂ → 2BeO', reactionType: 'синтез', explanation: 'Берилій окислюється при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво кераміки' },
  { id: 'r114', ingredients: ['sr', 'o2'], result: 'sro', equation: '2Sr + O₂ → 2SrO', reactionType: 'синтез', explanation: 'Стронцій легко окислюється.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво сполук стронцію' },
  { id: 'r115', ingredients: ['sr', 'h2o'], result: 'sroh2', equation: 'Sr + 2H₂O → Sr(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Стронцій реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гідроксиду стронцію' },
  { id: 'r116', ingredients: ['sr', 'cl2'], result: 'srcl2', equation: 'Sr + Cl₂ → SrCl₂', reactionType: 'синтез', explanation: 'Стронцій реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Червоні феєрверки' },
  { id: 'r117', ingredients: ['mn', 'o2'], result: 'mno2', equation: 'Mn + O₂ → MnO₂', reactionType: 'синтез', explanation: 'Марганець окислюється до діоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво батарейок' },
  { id: 'r118', ingredients: ['mn', 'hcl'], result: 'mncl2', equation: 'Mn + 2HCl → MnCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Марганець розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво солей марганцю' },
  { id: 'r119', ingredients: ['cr', 'o2'], result: 'cr2o3', equation: '4Cr + 3O₂ → 2Cr₂O₃', reactionType: 'синтез', explanation: 'Хром окислюється до зеленого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r120', ingredients: ['ni', 'o2'], result: 'nio', equation: '2Ni + O₂ → 2NiO', reactionType: 'синтез', explanation: 'Нікель окислюється при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво кераміки' },
  { id: 'r121', ingredients: ['ni', 'hcl'], result: 'nicl2', equation: 'Ni + 2HCl → NiCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Нікель повільно розчиняється в кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво солей нікелю' },
  { id: 'r122', ingredients: ['co', 'o2'], result: 'coo', equation: '2Co + O₂ → 2CoO', reactionType: 'синтез', explanation: 'Кобальт окислюється до чорного оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r123', ingredients: ['co', 'hcl'], result: 'cocl2', equation: 'Co + 2HCl → CoCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кобальт розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво солей кобальту' },
  { id: 'r124', ingredients: ['sn', 'o2'], result: 'sno2', equation: 'Sn + O₂ → SnO₂', reactionType: 'синтез', explanation: 'Олово окислюється до білого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r125', ingredients: ['sn', 'hcl'], result: 'sncl2', equation: 'Sn + 2HCl → SnCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Олово розчиняється в соляній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Відновник' },
  { id: 'r126', ingredients: ['ti', 'o2'], result: 'tio2', equation: 'Ti + O₂ → TiO₂', reactionType: 'синтез', explanation: 'Титан окислюється до білого пігменту.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Білі фарби' },
  { id: 'r127', ingredients: ['v', 'o2'], result: 'v2o5', equation: '4V + 5O₂ → 2V₂O₅', reactionType: 'синтез', explanation: 'Ванадій окислюється до оранжевого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Каталізатор' },
  { id: 'r128', ingredients: ['w', 'o2'], result: 'wo3', equation: '2W + 3O₂ → 2WO₃', reactionType: 'синтез', explanation: 'Вольфрам окислюється при високій температурі.', conditions: 'Висока температура', energy: 'екзотермічна', application: 'Виробництво вольфраму' },
  { id: 'r129', ingredients: ['mo', 'o2'], result: 'moo3', equation: '2Mo + 3O₂ → 2MoO₃', reactionType: 'синтез', explanation: 'Молібден окислюється до жовтого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Каталізатор' },
  { id: 'r130', ingredients: ['hg', 'o2'], result: 'hgo', equation: '2Hg + O₂ → 2HgO', reactionType: 'синтез', explanation: 'Ртуть окислюється до червоного оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Історичний синтез' },
  { id: 'r131', ingredients: ['au', 'cl2'], result: 'aucl3', equation: '2Au + 3Cl₂ → 2AuCl₃', reactionType: 'синтез', explanation: 'Золото реагує з хлором при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Хлорування золота' },
  { id: 'r132', ingredients: ['pt', 'cl2'], result: 'ptcl4', equation: 'Pt + 2Cl₂ → PtCl₄', reactionType: 'синтез', explanation: 'Платина реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво солей платини' },
  { id: 'r133', ingredients: ['b', 'o2'], result: 'b2o3', equation: '4B + 3O₂ → 2B₂O₃', reactionType: 'синтез', explanation: 'Бор горить зеленим полум\'ям.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r134', ingredients: ['as', 'o2'], result: 'as2o3', equation: '4As + 3O₂ → 2As₂O₃', reactionType: 'синтез', explanation: 'Миш\'як окислюється до білого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Історична отрута' },
  { id: 'r135', ingredients: ['sb', 'o2'], result: 'sb2o3', equation: '4Sb + 3O₂ → 2Sb₂O₃', reactionType: 'синтез', explanation: 'Сурма окислюється до білого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Вогнезахист' },
  { id: 'r136', ingredients: ['bi', 'o2'], result: 'bi2o3', equation: '4Bi + 3O₂ → 2Bi₂O₃', reactionType: 'синтез', explanation: 'Вісмут окислюється до жовтого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r137', ingredients: ['se', 'o2'], result: 'seo2', equation: 'Se + O₂ → SeO₂', reactionType: 'синтез', explanation: 'Селен окислюється до білого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r138', ingredients: ['te', 'o2'], result: 'teo2', equation: 'Te + O₂ → TeO₂', reactionType: 'синтез', explanation: 'Телур окислюється до білого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r139', ingredients: ['br2', 'h2'], result: 'hbr', equation: 'Br₂ + H₂ → 2HBr', reactionType: 'синтез', explanation: 'Бром реагує з воднем.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво бромоводню' },
  { id: 'r140', ingredients: ['i2', 'h2'], result: 'hi', equation: 'I₂ + H₂ ⇌ 2HI', reactionType: 'синтез', explanation: 'Йод повільно реагує з воднем (оборотна реакція).', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Виробництво йодоводню' },
  { id: 'r141', ingredients: ['f2', 'h2'], result: 'hf', equation: 'F₂ + H₂ → 2HF', reactionType: 'синтез', explanation: 'Фтор вибухово реагує з воднем.', conditions: 'ВИБУХОНЕБЕЗПЕЧНО!', energy: 'екзотермічна', application: 'Виробництво фтороводню' },
  { id: 'r142', ingredients: ['cl2', 'h2o'], result: 'hcl', equation: 'Cl₂ + H₂O ⇌ HCl + HClO', reactionType: 'обмін', explanation: 'Хлор частково реагує з водою.', conditions: 'Кімнатна температура', energy: 'ендотермічна', application: 'Хлорування води' },
  { id: 'r143', ingredients: ['br2', 'h2o'], result: 'hbr', equation: 'Br₂ + H₂O ⇌ HBr + HBrO', reactionType: 'обмін', explanation: 'Бром частково реагує з водою.', conditions: 'Кімнатна температура', energy: 'ендотермічна', application: 'Бромна вода' },
  { id: 'r144', ingredients: ['i2', 'h2o'], result: 'hi', equation: 'I₂ + H₂O ⇌ HI + HIO', reactionType: 'обмін', explanation: 'Йод дуже слабко реагує з водою.', conditions: 'Кімнатна температура', energy: 'ендотермічна', application: 'Йодна вода' },
  { id: 'r145', ingredients: ['p', 'cl2'], result: 'pcl3', equation: '2P + 3Cl₂ → 2PCl₃', reactionType: 'синтез', explanation: 'Фосфор реагує з хлором.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду фосфору' },
  { id: 'r146', ingredients: ['pcl3', 'cl2'], result: 'pcl5', equation: 'PCl₃ + Cl₂ → PCl₅', reactionType: 'синтез', explanation: 'Хлорид фосфору(III) окислюється.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду фосфору(V)' },
  { id: 'r147', ingredients: ['s', 'cl2'], result: 'scl2', equation: 'S + Cl₂ → SCl₂', reactionType: 'синтез', explanation: 'Сірка реагує з хлором.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r148', ingredients: ['c', 's'], result: 'cs2', equation: 'C + 2S → CS₂', reactionType: 'синтез', explanation: 'Вуглець реагує з сіркою при високій температурі.', conditions: 'Висока температура', energy: 'ендотермічна', application: 'Виробництво сірковуглецю' },
  { id: 'r149', ingredients: ['c', 'cl2'], result: 'ccl4', equation: 'C + 2Cl₂ → CCl₄', reactionType: 'синтез', explanation: 'Вуглець реагує з хлором при високій температурі.', conditions: 'Висока температура', energy: 'ендотермічна', application: 'Виробництво тетрахлорметану' },
  { id: 'r150', ingredients: ['si', 'cl2'], result: 'sicl4', equation: 'Si + 2Cl₂ → SiCl₄', reactionType: 'синтез', explanation: 'Кремній реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво чистого кремнію' },
  { id: 'r98', ingredients: ['mg', 'h2so4'], result: 'mgso4', equation: 'Mg + H₂SO₄ → MgSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Магній розчиняється в сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво англійської солі' },
  { id: 'r99', ingredients: ['ca', 'hcl'], result: 'cacl2', equation: 'Ca + 2HCl → CaCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кальцій активно реагує з соляною кислотою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду кальцію' },
  { id: 'r100', ingredients: ['ca', 'h2o'], result: 'caoh2', equation: 'Ca + 2H₂O → Ca(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кальцій реагує з водою, утворюючи вапняну воду.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Демонстрація реактивності' },
  
  // Ще кілька важливих реакцій
  { id: 'r101', ingredients: ['h2o2', 'h2o'], result: 'h2o', equation: '2H₂O₂ → 2H₂O + O₂↑', reactionType: 'розклад', explanation: 'Перекис водню розкладається з виділенням кисню.', conditions: 'Каталізатор MnO₂', energy: 'екзотермічна', application: 'Отримання кисню в лабораторії' },
  { id: 'r102', ingredients: ['co', 'o2'], result: 'co2', equation: '2CO + O₂ → 2CO₂', reactionType: 'синтез', explanation: 'Чадний газ згоряє до вуглекислого газу.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Знешкодження чадного газу' },
  { id: 'r103', ingredients: ['c', 'co2'], result: 'co', equation: 'C + CO₂ → 2CO', reactionType: 'заміщення', explanation: 'Вуглець відновлює вуглекислий газ до чадного.', conditions: 'Високе нагрівання', energy: 'ендотермічна', application: 'Доменний процес' },
  { id: 'r104', ingredients: ['h2so4', 'fe'], result: 'feso4', equation: 'Fe + H₂SO₄(розб.) → FeSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Залізо розчиняється в розбавленій сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво залізного купоросу' },
  { id: 'r105', ingredients: ['h3po4', 'naoh'], result: 'nacl', equation: 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O', reactionType: 'нейтралізація', explanation: 'Фосфорна кислота нейтралізується лугом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво фосфатів' },
  { id: 'r151', ingredients: ['pb', 'hno3'], result: 'pbno32', equation: '3Pb + 8HNO₃ → 3Pb(NO₃)₂ + 2NO↑ + 4H₂O', reactionType: 'заміщення', explanation: 'Свинець розчиняється в азотній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво солей свинцю' },
  { id: 'r152', ingredients: ['ag', 'h2s'], result: 'ag2s', equation: '2Ag + H₂S → Ag₂S + H₂', reactionType: 'синтез', explanation: 'Срібло темніє від сірководню.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Потемніння срібла' },
  { id: 'r153', ingredients: ['cu', 's'], result: 'cus', equation: 'Cu + S → CuS', reactionType: 'синтез', explanation: 'Мідь реагує з сіркою при нагріванні.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво сульфіду міді' },
  { id: 'r154', ingredients: ['pb', 's'], result: 'pbs', equation: 'Pb + S → PbS', reactionType: 'синтез', explanation: 'Свинець реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Галеніт' },
  { id: 'r155', ingredients: ['zn', 's'], result: 'zns', equation: 'Zn + S → ZnS', reactionType: 'синтез', explanation: 'Цинк реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Люмінофори' },
  { id: 'r156', ingredients: ['hg', 's'], result: 'hgs', equation: 'Hg + S → HgS', reactionType: 'синтез', explanation: 'Ртуть реагує з сіркою.', conditions: 'Розтирання', energy: 'екзотермічна', application: 'Кіновар' },
  { id: 'r157', ingredients: ['mg', 's'], result: 'mgs', equation: 'Mg + S → MgS', reactionType: 'синтез', explanation: 'Магній реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r158', ingredients: ['al', 's'], result: 'al2s3', equation: '2Al + 3S → Al₂S₃', reactionType: 'синтез', explanation: 'Алюміній реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r159', ingredients: ['na', 's'], result: 'na2s', equation: '2Na + S → Na₂S', reactionType: 'синтез', explanation: 'Натрій реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво сульфіду натрію' },
  { id: 'r160', ingredients: ['k', 's'], result: 'k2s', equation: '2K + S → K₂S', reactionType: 'синтез', explanation: 'Калій реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво сульфіду калію' },
  { id: 'r161', ingredients: ['ca', 's'], result: 'cas', equation: 'Ca + S → CaS', reactionType: 'синтез', explanation: 'Кальцій реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Люмінофори' },
  { id: 'r162', ingredients: ['ba', 's'], result: 'bas', equation: 'Ba + S → BaS', reactionType: 'синтез', explanation: 'Барій реагує з сіркою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Хімічний синтез' },
  { id: 'r163', ingredients: ['h2so4', 'zn'], result: 'znso4', equation: 'Zn + H₂SO₄ → ZnSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Цинк розчиняється в сірчаній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Лабораторний метод' },
  { id: 'r164', ingredients: ['h2so4', 'cu'], result: 'cuso4', equation: 'Cu + 2H₂SO₄(конц.) → CuSO₄ + SO₂↑ + 2H₂O', reactionType: 'заміщення', explanation: 'Мідь розчиняється в концентрованій сірчаній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Мідний купорос' },
  { id: 'r165', ingredients: ['hno3', 'cu'], result: 'cuno32', equation: '3Cu + 8HNO₃(розб.) → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O', reactionType: 'заміщення', explanation: 'Мідь розчиняється в азотній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво нітрату міді' },
  { id: 'r166', ingredients: ['hno3', 'zn'], result: 'znno32', equation: '4Zn + 10HNO₃(розб.) → 4Zn(NO₃)₂ + N₂O↑ + 5H₂O', reactionType: 'заміщення', explanation: 'Цинк розчиняється в азотній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво нітрату цинку' },
  { id: 'r167', ingredients: ['hno3', 'fe'], result: 'feno33', equation: 'Fe + 4HNO₃(розб.) → Fe(NO₃)₃ + NO↑ + 2H₂O', reactionType: 'заміщення', explanation: 'Залізо розчиняється в азотній кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво нітрату заліза' },
  { id: 'r168', ingredients: ['naoh', 'al'], result: 'aloh3', equation: '2Al + 6NaOH + 6H₂O → 2Na₃[Al(OH)₆] + 3H₂↑', reactionType: 'заміщення', explanation: 'Алюміній розчиняється в лугах.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Амфотерність алюмінію' },
  { id: 'r169', ingredients: ['naoh', 'zn'], result: 'znoh2', equation: 'Zn + 2NaOH + 2H₂O → Na₂[Zn(OH)₄] + H₂↑', reactionType: 'заміщення', explanation: 'Цинк розчиняється в лугах.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Амфотерність цинку' },
  { id: 'r170', ingredients: ['koh', 'h2so4'], result: 'k2so4', equation: '2KOH + H₂SO₄ → K₂SO₄ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Їдкий калій нейтралізує сірчану кислоту.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво сульфату калію' },
  { id: 'r171', ingredients: ['koh', 'hcl'], result: 'kcl', equation: 'KOH + HCl → KCl + H₂O', reactionType: 'нейтралізація', explanation: 'Їдкий калій нейтралізує соляну кислоту.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду калію' },
  { id: 'r172', ingredients: ['baoh2', 'h2so4'], result: 'baso4', equation: 'Ba(OH)₂ + H₂SO₄ → BaSO₄↓ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється білий осад сульфату барію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Рентгеноконтраст' },
  { id: 'r173', ingredients: ['h2co3', 'naoh'], result: 'na2co3', equation: 'H₂CO₃ + 2NaOH → Na₂CO₃ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Вугільна кислота нейтралізується лугом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво соди' },
  { id: 'r174', ingredients: ['h2so3', 'naoh'], result: 'na2so3', equation: 'H₂SO₃ + 2NaOH → Na₂SO₃ + 2H₂O', reactionType: 'нейтралізація', explanation: 'Сірчиста кислота нейтралізується.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво сульфіту натрію' },
  { id: 'r175', ingredients: ['caco3', 'hcl'], result: 'cacl2', equation: 'CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Крейда шипить в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виявлення карбонатів' },
  { id: 'r176', ingredients: ['mgco3', 'hcl'], result: 'mgcl2', equation: 'MgCO₃ + 2HCl → MgCl₂ + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Магнезит розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду магнію' },
  { id: 'r177', ingredients: ['feco3', 'hcl'], result: 'fecl2', equation: 'FeCO₃ + 2HCl → FeCl₂ + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Сидерит розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду заліза' },
  { id: 'r178', ingredients: ['k2co3', 'hcl'], result: 'kcl', equation: 'K₂CO₃ + 2HCl → 2KCl + H₂O + CO₂↑', reactionType: 'обмін', explanation: 'Поташ реагує з кислотою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлориду калію' },
  { id: 'r179', ingredients: ['pbno32', 'ki'], result: 'pbi2', equation: 'Pb(NO₃)₂ + 2KI → PbI₂↓ + 2KNO₃', reactionType: 'обмін', explanation: 'Утворюється яскраво-жовтий осад йодиду свинцю.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Золотий дощ' },
  { id: 'r180', ingredients: ['agno3', 'ki'], result: 'agi', equation: 'AgNO₃ + KI → AgI↓ + KNO₃', reactionType: 'обмін', explanation: 'Утворюється жовтий осад йодиду срібла.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Фотографія' },
  
  // Реакції з фосфором та його сполуками
  { id: 'r181', ingredients: ['p', 'o2'], result: 'p2o5', equation: '4P + 5O₂ → 2P₂O₅', reactionType: 'синтез', explanation: 'Фосфор горить яскравим полум\'ям.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Виробництво фосфорної кислоти' },
  { id: 'r182', ingredients: ['p2o5', 'h2o'], result: 'h3po4', equation: 'P₂O₅ + 3H₂O → 2H₃PO₄', reactionType: 'синтез', explanation: 'Оксид фосфору енергійно реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво кислоти' },
  { id: 'r183', ingredients: ['ca3po42', 'h2so4'], result: 'h3po4', equation: 'Ca₃(PO₄)₂ + 3H₂SO₄ → 2H₃PO₄ + 3CaSO₄', reactionType: 'обмін', explanation: 'Фосфорит розкладається сірчаною кислотою.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво добрив' },
  { id: 'r184', ingredients: ['h3po4', 'naoh'], result: 'na3po4', equation: 'H₃PO₄ + 3NaOH → Na₃PO₄ + 3H₂O', reactionType: 'нейтралізація', explanation: 'Фосфорна кислота нейтралізується лугом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво фосфатів' },
  { id: 'r185', ingredients: ['p', 'cl2'], result: 'pcl3', equation: '2P + 3Cl₂ → 2PCl₃', reactionType: 'синтез', explanation: 'Утворюється хлорид фосфору.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Органічний синтез' },
  
  // Реакції з кремнієм
  { id: 'r186', ingredients: ['si', 'o2'], result: 'sio2', equation: 'Si + O₂ → SiO₂', reactionType: 'синтез', explanation: 'Кремній окислюється до кварцу.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r187', ingredients: ['sio2', 'naoh'], result: 'na2sio3', equation: 'SiO₂ + 2NaOH → Na₂SiO₃ + H₂O', reactionType: 'обмін', explanation: 'Кварц розчиняється в концентрованому лугу.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Рідке скло' },
  { id: 'r188', ingredients: ['si', 'c'], result: 'sic', equation: 'Si + C → SiC', reactionType: 'синтез', explanation: 'Утворюється карбід кремнію - надтвердий матеріал.', conditions: '2000°C', energy: 'ендотермічна', application: 'Абразиви' },
  { id: 'r189', ingredients: ['sio2', 'c'], result: 'si', equation: 'SiO₂ + 2C → Si + 2CO↑', reactionType: 'відновлення', explanation: 'Вуглець відновлює кремній з оксиду.', conditions: 'Електрична піч', energy: 'ендотермічна', application: 'Виробництво кремнію' },
  { id: 'r190', ingredients: ['si', 'hf'], result: 'sif4', equation: 'Si + 4HF → SiF₄ + 2H₂', reactionType: 'заміщення', explanation: 'Кремній розчиняється в плавиковій кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Травлення скла' },
  
  // Реакції з бором
  { id: 'r191', ingredients: ['b', 'o2'], result: 'b2o3', equation: '4B + 3O₂ → 2B₂O₃', reactionType: 'синтез', explanation: 'Бор окислюється на повітрі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво скла' },
  { id: 'r192', ingredients: ['b2o3', 'h2o'], result: 'h3bo3', equation: 'B₂O₃ + 3H₂O → 2H₃BO₃', reactionType: 'синтез', explanation: 'Утворюється борна кислота.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Антисептик' },
  { id: 'r193', ingredients: ['h3bo3', 'naoh'], result: 'na2b4o7', equation: '4H₃BO₃ + 2NaOH → Na₂B₄O₇ + 7H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється бура - тетраборат натрію.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Миючі засоби' },
  
  // Реакції з хромом
  { id: 'r194', ingredients: ['cr', 'o2'], result: 'cr2o3', equation: '4Cr + 3O₂ → 2Cr₂O₃', reactionType: 'синтез', explanation: 'Хром окислюється до зеленого оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r195', ingredients: ['cr2o3', 'naoh'], result: 'na2cro4', equation: 'Cr₂O₃ + 4NaOH + 3O₂ → 2Na₂CrO₄ + 2H₂O', reactionType: 'окислення', explanation: 'Оксид хрому окислюється до хромату.', conditions: 'Сплавлення з лугом', energy: 'екзотермічна', application: 'Виробництво хроматів' },
  { id: 'r196', ingredients: ['na2cro4', 'h2so4'], result: 'na2cr2o7', equation: '2Na₂CrO₄ + H₂SO₄ → Na₂Cr₂O₇ + Na₂SO₄ + H₂O', reactionType: 'обмін', explanation: 'Хромат переходить у біхромат.', conditions: 'Підкислення', energy: 'екзотермічна', application: 'Окисники' },
  
  // Реакції з манганом
  { id: 'r197', ingredients: ['mn', 'o2'], result: 'mno2', equation: '2Mn + O₂ → 2MnO₂', reactionType: 'синтез', explanation: 'Манган окислюється до діоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Батарейки' },
  { id: 'r198', ingredients: ['mno2', 'hcl'], result: 'mncl2', equation: 'MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O', reactionType: 'окислення', explanation: 'Діоксид мангану окислює соляну кислоту.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво хлору' },
  { id: 'r199', ingredients: ['kmno4', 'h2so4'], result: 'mno2', equation: '2KMnO₄ + 3H₂SO₄ → 2MnO₂ + K₂SO₄ + 3H₂O + 5[O]', reactionType: 'розкладання', explanation: 'Перманганат розкладається в кислому середовищі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Окисник' },
  
  // Реакції з нікелем та кобальтом
  { id: 'r200', ingredients: ['ni', 'o2'], result: 'nio', equation: '2Ni + O₂ → 2NiO', reactionType: 'синтез', explanation: 'Нікель окислюється до чорного оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Кераміка' },
  { id: 'r201', ingredients: ['ni', 'h2so4'], result: 'niso4', equation: 'Ni + H₂SO₄ → NiSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Нікель розчиняється в сірчаній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Гальванопластика' },
  { id: 'r202', ingredients: ['co', 'o2'], result: 'coo', equation: '2Co + O₂ → 2CoO', reactionType: 'синтез', explanation: 'Кобальт окислюється до оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r203', ingredients: ['co', 'hcl'], result: 'cocl2', equation: 'Co + 2HCl → CoCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кобальт розчиняється в соляній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Індикатори вологості' },
  
  // Реакції з оловом
  { id: 'r204', ingredients: ['sn', 'o2'], result: 'sno2', equation: 'Sn + O₂ → SnO₂', reactionType: 'синтез', explanation: 'Олово окислюється до діоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Датчики газу' },
  { id: 'r205', ingredients: ['sn', 'hcl'], result: 'sncl2', equation: 'Sn + 2HCl → SnCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Олово розчиняється в соляній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Відновник' },
  { id: 'r206', ingredients: ['sn', 'naoh'], result: 'na2sno3', equation: 'Sn + 2NaOH + H₂O → Na₂SnO₃ + 2H₂↑', reactionType: 'заміщення', explanation: 'Олово амфотерне - розчиняється в лугах.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Амфотерність' },
  
  // Реакції з титаном
  { id: 'r207', ingredients: ['ti', 'o2'], result: 'tio2', equation: 'Ti + O₂ → TiO₂', reactionType: 'синтез', explanation: 'Титан окислюється до білого діоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Білий пігмент' },
  { id: 'r208', ingredients: ['ti', 'cl2'], result: 'ticl4', equation: 'Ti + 2Cl₂ → TiCl₄', reactionType: 'синтез', explanation: 'Утворюється тетрахлорид титану.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво титану' },
  { id: 'r209', ingredients: ['tio2', 'h2so4'], result: 'tioso4', equation: 'TiO₂ + H₂SO₄ → TiOSO₄ + H₂O', reactionType: 'обмін', explanation: 'Діоксид титану розчиняється в концентрованій кислоті.', conditions: 'Концентрована кислота', energy: 'екзотермічна', application: 'Хімічна переробка' },
  
  // Реакції з ванадієм
  { id: 'r210', ingredients: ['v', 'o2'], result: 'v2o5', equation: '4V + 5O₂ → 2V₂O₅', reactionType: 'синтез', explanation: 'Ванадій окислюється до п\'ятивалентного оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Каталізатор' },
  { id: 'r211', ingredients: ['v2o5', 'h2so4'], result: 'voso4', equation: 'V₂O₅ + H₂SO₄ → 2VOSO₄ + H₂O', reactionType: 'обмін', explanation: 'Оксид ванадію розчиняється в кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Ванадієві сполуки' },
  
  // Реакції з вольфрамом
  { id: 'r212', ingredients: ['w', 'o2'], result: 'wo3', equation: '2W + 3O₂ → 2WO₃', reactionType: 'синтез', explanation: 'Вольфрам окислюється до жовтого оксиду.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Пігменти' },
  { id: 'r213', ingredients: ['wo3', 'h2'], result: 'w', equation: 'WO₃ + 3H₂ → W + 3H₂O', reactionType: 'відновлення', explanation: 'Водень відновлює вольфрам з оксиду.', conditions: '800-1000°C', energy: 'ендотермічна', application: 'Виробництво вольфраму' },
  
  // Реакції з молібденом
  { id: 'r214', ingredients: ['mo', 'o2'], result: 'moo3', equation: '2Mo + 3O₂ → 2MoO₃', reactionType: 'синтез', explanation: 'Молібден окислюється до триоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Каталізатор' },
  { id: 'r215', ingredients: ['moo3', 'naoh'], result: 'na2moo4', equation: 'MoO₃ + 2NaOH → Na₂MoO₄ + H₂O', reactionType: 'обмін', explanation: 'Оксид молібдену розчиняється в лугу.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Молібдати' },
  
  // Реакції з берилієм
  { id: 'r216', ingredients: ['be', 'o2'], result: 'beo', equation: '2Be + O₂ → 2BeO', reactionType: 'синтез', explanation: 'Берилій окислюється до оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Кераміка' },
  { id: 'r217', ingredients: ['be', 'h2so4'], result: 'beso4', equation: 'Be + H₂SO₄ → BeSO₄ + H₂↑', reactionType: 'заміщення', explanation: 'Берилій розчиняється в кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Берилієві солі' },
  { id: 'r218', ingredients: ['beo', 'naoh'], result: 'na2beo2', equation: 'BeO + 2NaOH → Na₂BeO₂ + H₂O', reactionType: 'обмін', explanation: 'Берилій амфотерний - розчиняється в лугах.', conditions: 'Сплавлення', energy: 'екзотермічна', application: 'Амфотерність' },
  
  // Реакції з літієм
  { id: 'r219', ingredients: ['li', 'h2o'], result: 'lioh', equation: '2Li + 2H₂O → 2LiOH + H₂↑', reactionType: 'заміщення', explanation: 'Літій енергійно реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r220', ingredients: ['li', 'n2'], result: 'li3n', equation: '6Li + N₂ → 2Li₃N', reactionType: 'синтез', explanation: 'Літій єдиний лужний метал, що реагує з азотом.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Нітриди' },
  { id: 'r221', ingredients: ['lioh', 'co2'], result: 'li2co3', equation: '2LiOH + CO₂ → Li₂CO₃ + H₂O', reactionType: 'обмін', explanation: 'Гідроксид літію поглинає вуглекислий газ.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Очищення повітря' },
  
  // Реакції з рубідієм та цезієм
  { id: 'r222', ingredients: ['rb', 'h2o'], result: 'rboh', equation: '2Rb + 2H₂O → 2RbOH + H₂↑', reactionType: 'заміщення', explanation: 'Рубідій бурхливо реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r223', ingredients: ['cs', 'h2o'], result: 'csoh', equation: '2Cs + 2H₂O → 2CsOH + H₂↑', reactionType: 'заміщення', explanation: 'Цезій вибухово реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Найактивніший метал' },
  
  // Реакції з стронцієм
  { id: 'r224', ingredients: ['sr', 'o2'], result: 'sro', equation: '2Sr + O₂ → 2SrO', reactionType: 'синтез', explanation: 'Стронцій окислюється на повітрі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Піротехніка' },
  { id: 'r225', ingredients: ['sr', 'h2o'], result: 'sroh2', equation: 'Sr + 2H₂O → Sr(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Стронцій реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r226', ingredients: ['sro', 'h2o'], result: 'sroh2', equation: 'SrO + H₂O → Sr(OH)₂', reactionType: 'синтез', explanation: 'Оксид стронцію гасить водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r227', ingredients: ['sroh2', 'co2'], result: 'srco3', equation: 'Sr(OH)₂ + CO₂ → SrCO₃↓ + H₂O', reactionType: 'обмін', explanation: 'Утворюється осад карбонату стронцію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виявлення CO₂' },
  
  // Реакції з радієм (обережно!)
  { id: 'r228', ingredients: ['ra', 'h2o'], result: 'raoh2', equation: 'Ra + 2H₂O → Ra(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Радій дуже активний лужноземельний метал.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Радіоактивний' },
  
  // Додаткові реакції з галогенами
  { id: 'r229', ingredients: ['br2', 'h2'], result: 'hbr', equation: 'Br₂ + H₂ → 2HBr', reactionType: 'синтез', explanation: 'Утворюється бромоводнева кислота.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Кислоти' },
  { id: 'r230', ingredients: ['i2', 'h2'], result: 'hi', equation: 'I₂ + H₂ ⇌ 2HI', reactionType: 'синтез', explanation: 'Оборотна реакція утворення йодоводню.', conditions: 'Каталізатор', energy: 'ендотермічна', application: 'Рівновага' },
  
  // Реакції з азотом та його сполуками
  { id: 'r231', ingredients: ['n2', 'h2'], result: 'nh3', equation: 'N₂ + 3H₂ ⇌ 2NH₃', reactionType: 'синтез', explanation: 'Процес Габера-Боша - синтез аміаку.', conditions: 'Високий тиск, каталізатор Fe', energy: 'екзотермічна', application: 'Виробництво добрив' },
  { id: 'r232', ingredients: ['nh3', 'o2'], result: 'no', equation: '4NH₃ + 5O₂ → 4NO + 6H₂O', reactionType: 'окислення', explanation: 'Каталітичне окислення аміаку.', conditions: 'Платиновий каталізатор', energy: 'екзотермічна', application: 'Виробництво азотної кислоти' },
  { id: 'r233', ingredients: ['no', 'o2'], result: 'no2', equation: '2NO + O₂ → 2NO₂', reactionType: 'окислення', explanation: 'Монооксид азоту окислюється до діоксиду.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Проміжний продукт' },
  { id: 'r234', ingredients: ['no2', 'h2o'], result: 'hno3', equation: '4NO₂ + O₂ + 2H₂O → 4HNO₃', reactionType: 'синтез', explanation: 'Діоксид азоту реагує з водою.', conditions: 'Присутність кисню', energy: 'екзотермічна', application: 'Виробництво азотної кислоти' },
  { id: 'r235', ingredients: ['nh3', 'hcl'], result: 'nh4cl', equation: 'NH₃ + HCl → NH₄Cl', reactionType: 'синтез', explanation: 'Утворюється білий дим хлориду амонію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Нашатир' },
  { id: 'r236', ingredients: ['nh3', 'h2so4'], result: 'nh42so4', equation: '2NH₃ + H₂SO₄ → (NH₄)₂SO₄', reactionType: 'нейтралізація', explanation: 'Утворюється сульфат амонію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Добрива' },
  { id: 'r237', ingredients: ['nh3', 'hno3'], result: 'nh4no3', equation: 'NH₃ + HNO₃ → NH₄NO₃', reactionType: 'нейтралізація', explanation: 'Утворюється аміачна селітра.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Добрива та вибухівка' },
  { id: 'r238', ingredients: ['nh4cl', 'naoh'], result: 'nh3', equation: 'NH₄Cl + NaOH → NH₃↑ + NaCl + H₂O', reactionType: 'обмін', explanation: 'Виділяється газоподібний аміак.', conditions: 'Нагрівання', energy: 'ендотермічна', application: 'Лабораторний синтез аміаку' },
  
  // Реакції з вуглецем та його сполуками
  { id: 'r239', ingredients: ['c', 'o2'], result: 'co2', equation: 'C + O₂ → CO₂', reactionType: 'синтез', explanation: 'Повне згоряння вуглецю.', conditions: 'Надлишок кисню', energy: 'екзотермічна', application: 'Горіння' },
  { id: 'r240', ingredients: ['c', 'co2'], result: 'co', equation: 'C + CO₂ → 2CO', reactionType: 'відновлення', explanation: 'Вуглець відновлює вуглекислий газ.', conditions: 'Високе нагрівання', energy: 'ендотермічна', application: 'Металургія' },
  { id: 'r241', ingredients: ['co', 'o2'], result: 'co2', equation: '2CO + O₂ → 2CO₂', reactionType: 'окислення', explanation: 'Чадний газ горить синім полум\'ям.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Паливо' },
  { id: 'r242', ingredients: ['co2', 'c'], result: 'co', equation: 'CO₂ + C → 2CO', reactionType: 'відновлення', explanation: 'Відновлення вуглекислого газу вуглецем.', conditions: 'Високе нагрівання', energy: 'ендотермічна', application: 'Доменний процес' },
  { id: 'r243', ingredients: ['ch4', 'o2'], result: 'co2', equation: 'CH₄ + 2O₂ → CO₂ + 2H₂O', reactionType: 'окислення', explanation: 'Повне згоряння метану.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Природний газ' },
  { id: 'r244', ingredients: ['c2h5oh', 'o2'], result: 'co2', equation: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O', reactionType: 'окислення', explanation: 'Згоряння етанолу.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Біопаливо' },
  { id: 'r245', ingredients: ['ch3cooh', 'naoh'], result: 'ch3coona', equation: 'CH₃COOH + NaOH → CH₃COONa + H₂O', reactionType: 'нейтралізація', explanation: 'Утворюється ацетат натрію.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Харчова промисловість' },
  
  // Реакції з сіркою та її сполуками
  { id: 'r246', ingredients: ['s', 'h2'], result: 'h2s', equation: 'S + H₂ → H₂S', reactionType: 'синтез', explanation: 'Утворюється сірководень з запахом тухлих яєць.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Аналітична хімія' },
  { id: 'r247', ingredients: ['h2s', 'o2'], result: 'so2', equation: '2H₂S + 3O₂ → 2SO₂ + 2H₂O', reactionType: 'окислення', explanation: 'Сірководень горить синім полум\'ям.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Виробництво сірки' },
  { id: 'r248', ingredients: ['so2', 'h2o'], result: 'h2so3', equation: 'SO₂ + H₂O → H₂SO₃', reactionType: 'синтез', explanation: 'Утворюється сірчиста кислота.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Консервант' },
  { id: 'r249', ingredients: ['so3', 'h2o'], result: 'h2so4', equation: 'SO₃ + H₂O → H₂SO₄', reactionType: 'синтез', explanation: 'Триоксид сірки енергійно реагує з водою.', conditions: 'Обережно!', energy: 'екзотермічна', application: 'Виробництво кислоти' },
  { id: 'r250', ingredients: ['h2s', 'pb'], result: 'pbs', equation: 'H₂S + Pb → PbS + H₂', reactionType: 'заміщення', explanation: 'Свинець темніє від сірководню.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виявлення H₂S' },
  
  // Реакції з хлором та його сполуками
  { id: 'r251', ingredients: ['cl2', 'naoh'], result: 'naclo', equation: 'Cl₂ + 2NaOH → NaCl + NaClO + H₂O', reactionType: 'диспропорціонування', explanation: 'Хлор диспропорціонує в лугу.', conditions: 'Холодний розчин', energy: 'екзотермічна', application: 'Відбілювачі' },
  { id: 'r252', ingredients: ['cl2', 'h2o'], result: 'hclo', equation: 'Cl₂ + H₂O ⇌ HCl + HClO', reactionType: 'обмін', explanation: 'Хлор частково розчиняється у воді.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Хлорована вода' },
  { id: 'r253', ingredients: ['hclo', 'hcl'], result: 'cl2', equation: 'HClO + HCl → Cl₂ + H₂O', reactionType: 'окислення', explanation: 'Хлорнувата кислота окислює соляну.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво хлору' },
  { id: 'r254', ingredients: ['kclo3', 'hcl'], result: 'cl2', equation: 'KClO₃ + 6HCl → 3Cl₂ + KCl + 3H₂O', reactionType: 'окислення', explanation: 'Хлорат калію окислює соляну кислоту.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Лабораторний хлор' },
  
  // Реакції з фтором
  { id: 'r255', ingredients: ['f2', 'h2'], result: 'hf', equation: 'F₂ + H₂ → 2HF', reactionType: 'синтез', explanation: 'Вибухова реакція утворення плавикової кислоти.', conditions: 'Навіть у темряві', energy: 'екзотермічна', application: 'Найактивніший галоген' },
  { id: 'r256', ingredients: ['f2', 'h2o'], result: 'hf', equation: '2F₂ + 2H₂O → 4HF + O₂', reactionType: 'окислення', explanation: 'Фтор окислює воду.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Надзвичайно активний' },
  { id: 'r257', ingredients: ['hf', 'sio2'], result: 'sif4', equation: '4HF + SiO₂ → SiF₄ + 2H₂O', reactionType: 'обмін', explanation: 'Плавикова кислота розчиняє скло.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Травлення скла' },
  
  // Реакції з йодом
  { id: 'r258', ingredients: ['i2', 'naoh'], result: 'nai', equation: '3I₂ + 6NaOH → 5NaI + NaIO₃ + 3H₂O', reactionType: 'диспропорціонування', explanation: 'Йод диспропорціонує в гарячому лугу.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Йодати' },
  { id: 'r259', ingredients: ['i2', 'starch'], result: 'i2starch', equation: 'I₂ + крохмаль → синій комплекс', reactionType: 'комплексоутворення', explanation: 'Якісна реакція на йод або крохмаль.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Аналітична хімія' },
  
  // Реакції з калієм
  { id: 'r260', ingredients: ['k', 'h2o'], result: 'koh', equation: '2K + 2H₂O → 2KOH + H₂↑', reactionType: 'заміщення', explanation: 'Калій спалахує на воді фіолетовим полум\'ям.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Активний метал' },
  { id: 'r261', ingredients: ['k', 'o2'], result: 'k2o', equation: '4K + O₂ → 2K₂O', reactionType: 'синтез', explanation: 'Калій окислюється на повітрі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Оксиди' },
  { id: 'r262', ingredients: ['k2o', 'h2o'], result: 'koh', equation: 'K₂O + H₂O → 2KOH', reactionType: 'синтез', explanation: 'Оксид калію енергійно реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r263', ingredients: ['k', 'cl2'], result: 'kcl', equation: '2K + Cl₂ → 2KCl', reactionType: 'синтез', explanation: 'Калій горить у хлорі.', conditions: 'Горіння', energy: 'екзотермічна', application: 'Солі' },
  
  // Реакції з кальцієм
  { id: 'r264', ingredients: ['ca', 'h2o'], result: 'caoh2', equation: 'Ca + 2H₂O → Ca(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Кальцій повільно реагує з холодною водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Вапняна вода' },
  { id: 'r265', ingredients: ['cao', 'h2o'], result: 'caoh2', equation: 'CaO + H₂O → Ca(OH)₂', reactionType: 'синтез', explanation: 'Гасіння вапна - сильно екзотермічна реакція.', conditions: 'Виділення тепла', energy: 'екзотермічна', application: 'Будівництво' },
  { id: 'r266', ingredients: ['caoh2', 'co2'], result: 'caco3', equation: 'Ca(OH)₂ + CO₂ → CaCO₃↓ + H₂O', reactionType: 'обмін', explanation: 'Вапняна вода каламутніє від CO₂.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виявлення CO₂' },
  { id: 'r267', ingredients: ['caco3', 'heat'], result: 'cao', equation: 'CaCO₃ → CaO + CO₂↑', reactionType: 'розклад', explanation: 'Термічне розкладання вапняку.', conditions: '900-1000°C', energy: 'ендотермічна', application: 'Виробництво вапна' },
  { id: 'r268', ingredients: ['ca', 'n2'], result: 'ca3n2', equation: '3Ca + N₂ → Ca₃N₂', reactionType: 'синтез', explanation: 'Кальцій реагує з азотом при нагріванні.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Нітриди' },
  
  // Реакції з барієм
  { id: 'r269', ingredients: ['ba', 'h2o'], result: 'baoh2', equation: 'Ba + 2H₂O → Ba(OH)₂ + H₂↑', reactionType: 'заміщення', explanation: 'Барій енергійно реагує з водою.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r270', ingredients: ['ba', 'o2'], result: 'bao', equation: '2Ba + O₂ → 2BaO', reactionType: 'синтез', explanation: 'Барій окислюється на повітрі.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Оксиди' },
  { id: 'r271', ingredients: ['bao', 'h2o'], result: 'baoh2', equation: 'BaO + H₂O → Ba(OH)₂', reactionType: 'синтез', explanation: 'Оксид барію розчиняється у воді.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Луги' },
  { id: 'r272', ingredients: ['bacl2', 'h2so4'], result: 'baso4', equation: 'BaCl₂ + H₂SO₄ → BaSO₄↓ + 2HCl', reactionType: 'обмін', explanation: 'Якісна реакція на сульфат-іони.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Аналітична хімія' },
  
  // Реакції з алюмінієм (додаткові)
  { id: 'r273', ingredients: ['al', 'fe2o3'], result: 'fe', equation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe', reactionType: 'відновлення', explanation: 'Термітна реакція - дуже екзотермічна.', conditions: 'Підпалювання магнієм', energy: 'екзотермічна', application: 'Зварювання рейок' },
  { id: 'r274', ingredients: ['al', 'i2'], result: 'ali3', equation: '2Al + 3I₂ → 2AlI₃', reactionType: 'синтез', explanation: 'Фіолетові пари йоду реагують з алюмінієм.', conditions: 'Каталізатор - крапля води', energy: 'екзотермічна', application: 'Демонстраційний дослід' },
  { id: 'r275', ingredients: ['al2o3', 'naoh'], result: 'naalо2', equation: 'Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O', reactionType: 'обмін', explanation: 'Оксид алюмінію амфотерний.', conditions: 'Сплавлення', energy: 'екзотермічна', application: 'Амфотерність' },
  { id: 'r276', ingredients: ['al', 'hno3'], result: 'alno33', equation: 'Al + 4HNO₃(розб.) → Al(NO₃)₃ + NO↑ + 2H₂O', reactionType: 'заміщення', explanation: 'Алюміній розчиняється в розбавленій азотній кислоті.', conditions: 'Розбавлена кислота', energy: 'екзотермічна', application: 'Нітрати' },
  
  // Реакції з міддю (додаткові)
  { id: 'r277', ingredients: ['cu', 'cl2'], result: 'cucl2', equation: 'Cu + Cl₂ → CuCl₂', reactionType: 'синтез', explanation: 'Мідь горить у хлорі зеленим полум\'ям.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Хлориди' },
  { id: 'r278', ingredients: ['cuo', 'h2'], result: 'cu', equation: 'CuO + H₂ → Cu + H₂O', reactionType: 'відновлення', explanation: 'Водень відновлює мідь з оксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Відновлення металів' },
  { id: 'r279', ingredients: ['cuo', 'c'], result: 'cu', equation: '2CuO + C → 2Cu + CO₂↑', reactionType: 'відновлення', explanation: 'Вуглець відновлює мідь.', conditions: 'Високе нагрівання', energy: 'ендотермічна', application: 'Металургія' },
  { id: 'r280', ingredients: ['cu2o', 'h2so4'], result: 'cuso4', equation: 'Cu₂O + H₂SO₄ → CuSO₄ + Cu + H₂O', reactionType: 'диспропорціонування', explanation: 'Оксид міді(I) диспропорціонує в кислоті.', conditions: 'Розбавлена кислота', energy: 'екзотермічна', application: 'Хімія міді' },
  
  // Реакції з новими елементами
  // Літій
  { id: 'r281', ingredients: ['li', 'h2o'], result: 'lioh', equation: '2Li + 2H₂O → 2LiOH + H₂↑', reactionType: 'заміщення', explanation: 'Літій реагує з водою спокійніше за натрій.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Виробництво гідроксиду літію' },
  { id: 'r282', ingredients: ['li', 'o2'], result: 'li2o', equation: '4Li + O₂ → 2Li₂O', reactionType: 'синтез', explanation: 'Літій горить яскраво-червоним полум\'ям.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Піротехніка' },
  { id: 'r283', ingredients: ['li', 'cl2'], result: 'licl', equation: '2Li + Cl₂ → 2LiCl', reactionType: 'синтез', explanation: 'Літій реагує з хлором.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Електроліт для акумуляторів' },
  { id: 'r284', ingredients: ['li2o', 'h2o'], result: 'lioh', equation: 'Li₂O + H₂O → 2LiOH', reactionType: 'синтез', explanation: 'Оксид літію розчиняється у воді.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Гідроксиди' },
  
  // Бром
  { id: 'r285', ingredients: ['h2', 'br2'], result: 'hbr', equation: 'H₂ + Br₂ → 2HBr', reactionType: 'синтез', explanation: 'Водень реагує з бромом повільніше, ніж з хлором.', conditions: 'Нагрівання або світло', energy: 'екзотермічна', application: 'Виробництво бромідної кислоти' },
  { id: 'r286', ingredients: ['na', 'br2'], result: 'nabr', equation: '2Na + Br₂ → 2NaBr', reactionType: 'синтез', explanation: 'Натрій реагує з бромом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Седативні препарати' },
  { id: 'r287', ingredients: ['hbr', 'naoh'], result: 'nabr', equation: 'HBr + NaOH → NaBr + H₂O', reactionType: 'нейтралізація', explanation: 'Нейтралізація бромідної кислоти.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Броміди' },
  
  // Йод
  { id: 'r288', ingredients: ['h2', 'i2'], result: 'hi', equation: 'H₂ + I₂ ⇌ 2HI', reactionType: 'синтез', explanation: 'Оборотна реакція синтезу йодоводню.', conditions: 'Нагрівання, каталізатор', energy: 'ендотермічна', application: 'Йодиди' },
  { id: 'r289', ingredients: ['k', 'i2'], result: 'ki', equation: '2K + I₂ → 2KI', reactionType: 'синтез', explanation: 'Калій реагує з йодом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Профілактика захворювань щитовидки' },
  { id: 'r290', ingredients: ['na', 'i2'], result: 'nai', equation: '2Na + I₂ → 2NaI', reactionType: 'синтез', explanation: 'Натрій реагує з йодом.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Йодовані солі' },
  { id: 'r291', ingredients: ['hi', 'naoh'], result: 'nai', equation: 'HI + NaOH → NaI + H₂O', reactionType: 'нейтралізація', explanation: 'Нейтралізація йодидної кислоти.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Йодиди' },
  
  // Марганець
  { id: 'r292', ingredients: ['mn', 'o2'], result: 'mno2', equation: 'Mn + O₂ → MnO₂', reactionType: 'синтез', explanation: 'Марганець окислюється до діоксиду.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Батарейки' },
  { id: 'r293', ingredients: ['mno2', 'hcl'], result: 'cl2', equation: 'MnO₂ + 4HCl → MnCl₂ + Cl₂↑ + 2H₂O', reactionType: 'окислення', explanation: 'Лабораторний спосіб отримання хлору.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Отримання хлору' },
  { id: 'r294', ingredients: ['kmno4', 'hcl'], result: 'cl2', equation: '2KMnO₄ + 16HCl → 2KCl + 2MnCl₂ + 5Cl₂↑ + 8H₂O', reactionType: 'окислення', explanation: 'Перманганат калію - сильний окисник.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Окислення' },
  
  // Хром
  { id: 'r295', ingredients: ['cr', 'o2'], result: 'cr2o3', equation: '4Cr + 3O₂ → 2Cr₂O₃', reactionType: 'синтез', explanation: 'Хром окислюється до оксиду хрому(III).', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Зелений пігмент' },
  { id: 'r296', ingredients: ['cr2o3', 'al'], result: 'cr', equation: 'Cr₂O₃ + 2Al → Al₂O₃ + 2Cr', reactionType: 'відновлення', explanation: 'Алюмотермія - отримання хрому.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Металургія хрому' },
  
  // Титан
  { id: 'r297', ingredients: ['ti', 'o2'], result: 'tio2', equation: 'Ti + O₂ → TiO₂', reactionType: 'синтез', explanation: 'Титан окислюється до діоксиду.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Білий пігмент' },
  { id: 'r298', ingredients: ['ti', 'cl2'], result: 'ticl4', equation: 'Ti + 2Cl₂ → TiCl₄', reactionType: 'синтез', explanation: 'Титан реагує з хлором.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво титану' },
  
  // Нікель
  { id: 'r299', ingredients: ['ni', 'o2'], result: 'nio', equation: '2Ni + O₂ → 2NiO', reactionType: 'синтез', explanation: 'Нікель окислюється.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Каталізатори' },
  { id: 'r300', ingredients: ['ni', 'hcl'], result: 'nicl2', equation: 'Ni + 2HCl → NiCl₂ + H₂↑', reactionType: 'заміщення', explanation: 'Нікель розчиняється в кислоті.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Солі нікелю' },
];

export const multiIngredientRecipes: Recipe[] = [
  { id: 'm1', ingredients: ['na', 'h2o', 'cl2'], result: 'naclo', equation: '2Na + H₂O + Cl₂ → 2NaClO + H₂', reactionType: 'синтез', explanation: 'Комплексна реакція утворення гіпохлориту натрію - основи відбілювача.', conditions: 'Холодний розчин', energy: 'екзотермічна', application: 'Відбілювачі та дезінфектори', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm2', ingredients: ['c', 'h2', 'o2'], result: 'ch3cooh', equation: 'C + 2H₂ + O₂ → CH₃COOH', reactionType: 'синтез', explanation: 'Синтез оцтової кислоти з базових елементів через складний каталітичний процес.', conditions: 'Каталізатор, високий тиск', energy: 'екзотермічна', application: 'Виробництво оцту', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm3', ingredients: ['ca', 'c', 'o2'], result: 'caco3', equation: 'Ca + C + 3/2O₂ → CaCO₃', reactionType: 'синтез', explanation: 'Утворення карбонату кальцію - основи вапняку, крейди та мармуру.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Будівельні матеріали', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm4', ingredients: ['n2', 'h2', 'o2'], result: 'hno3', equation: 'N₂ + 3H₂ + 2O₂ → 2HNO₃', reactionType: 'синтез', explanation: 'Промисловий синтез нітратної кислоти через аміак (процес Оствальда).', conditions: 'Платиновий каталізатор, 900°C', energy: 'екзотермічна', application: 'Виробництво добрив та вибухівки', isMultiIngredient: true, difficulty: 'expert' },
  { id: 'm5', ingredients: ['s', 'o2', 'h2o'], result: 'h2so4', equation: 'S + 3/2O₂ + H₂O → H₂SO₄', reactionType: 'синтез', explanation: 'Контактний метод виробництва сірчаної кислоти.', conditions: 'V₂O₅ каталізатор', energy: 'екзотермічна', application: 'Хімічна промисловість', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm6', ingredients: ['na', 'c', 'o2'], result: 'na2co3', equation: '2Na + C + 3/2O₂ → Na₂CO₃', reactionType: 'синтез', explanation: 'Утворення кальцинованої соди.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Миючі засоби', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm7', ingredients: ['fe', 'c', 'o2'], result: 'fe2o3', equation: '4Fe + 3O₂ → 2Fe₂O₃ (C каталізатор)', reactionType: 'каталіз', explanation: 'Прискорене окислення заліза в присутності вуглецю.', conditions: 'Волога, вуглець як каталізатор', energy: 'екзотермічна', application: 'Корозія металів', isMultiIngredient: true, difficulty: 'easy' },
  { id: 'm8', ingredients: ['na', 'h2', 'c', 'o2'], result: 'nahco3', equation: 'Na + 1/2H₂ + C + 3/2O₂ → NaHCO₃', reactionType: 'синтез', explanation: 'Синтез харчової соди через процес Сольве.', conditions: 'Складний промисловий процес', energy: 'ендотермічна', application: 'Кулінарія, медицина', isMultiIngredient: true, difficulty: 'expert' },
  { id: 'm9', ingredients: ['c', 'h2', 'h2o'], result: 'c2h5oh', equation: '2C + 3H₂ + H₂O → C₂H₅OH', reactionType: 'синтез', explanation: 'Каталітичний синтез етанолу.', conditions: 'Каталізатор, високий тиск', energy: 'ендотермічна', application: 'Біопаливо, напої', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm10', ingredients: ['c', 'h2o', 'o2'], result: 'h2co3', equation: 'C + H₂O + O₂ → H₂CO₃', reactionType: 'синтез', explanation: 'Утворення вугільної кислоти через окислення.', conditions: 'Горіння та розчинення', energy: 'екзотермічна', application: 'Газовані напої', isMultiIngredient: true, difficulty: 'easy' },
  { id: 'm11', ingredients: ['n2', 'o2', 'h2o'], result: 'hno3', equation: 'N₂ + 2O₂ + H₂O → 2HNO₃', reactionType: 'синтез', explanation: 'Утворення азотної кислоти під час грози.', conditions: 'Електричний розряд', energy: 'ендотермічна', application: 'Природне добриво', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm12', ingredients: ['p', 'o2', 'h2o'], result: 'h3po4', equation: '2P + 5/2O₂ + 3H₂O → 2H₃PO₄', reactionType: 'синтез', explanation: 'Виробництво фосфорної кислоти з елементарного фосфору.', conditions: 'Горіння та гідратація', energy: 'екзотермічна', application: 'Напої, добрива', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm13', ingredients: ['k', 'n2', 'o2'], result: 'kno3', equation: '2K + N₂ + 3O₂ → 2KNO₃', reactionType: 'синтез', explanation: 'Синтез калійної селітри.', conditions: 'Високе нагрівання', energy: 'ендотермічна', application: 'Порох, добрива', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm14', ingredients: ['mg', 'c', 'o2'], result: 'mgo', equation: 'Mg + C + O₂ → MgO + CO', reactionType: 'синтез', explanation: 'Відновлення та окислення магнію.', conditions: 'Високе нагрівання', energy: 'екзотермічна', application: 'Металургія', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm15', ingredients: ['cu', 'h2so4', 'o2'], result: 'cuso4', equation: 'Cu + H₂SO₄ + 1/2O₂ → CuSO₄ + H₂O', reactionType: 'синтез', explanation: 'Окислювальне розчинення міді в сірчаній кислоті.', conditions: 'Нагрівання', energy: 'екзотермічна', application: 'Виробництво мідного купоросу', isMultiIngredient: true, difficulty: 'medium' },
  { id: 'm16', ingredients: ['zn', 'h2so4', 'cu'], result: 'cuso4', equation: 'Zn + H₂SO₄ → ZnSO₄ + H₂ (Cu каталізатор)', reactionType: 'каталіз', explanation: 'Цинк розчиняється швидше в присутності міді як каталізатора.', conditions: 'Кімнатна температура', energy: 'екзотермічна', application: 'Гальванічний елемент', isMultiIngredient: true, difficulty: 'easy' },
  { id: 'm17', ingredients: ['nh3', 'co2', 'h2o'], result: 'nh4no3', equation: '2NH₃ + CO₂ + H₂O → (NH₄)₂CO₃ → NH₄NO₃', reactionType: 'синтез', explanation: 'Проміжний етап у виробництві аміачної селітри.', conditions: 'Тиск, охолодження', energy: 'екзотермічна', application: 'Добрива', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm18', ingredients: ['al', 'fe2o3', 'c'], result: 'fe', equation: '2Al + Fe₂O₃ → Al₂O₃ + 2Fe (C підпал)', reactionType: 'заміщення', explanation: 'Термітна реакція - алюміній відновлює залізо з оксиду.', conditions: 'Підпалювання', energy: 'екзотермічна', application: 'Зварювання рейок', isMultiIngredient: true, difficulty: 'hard' },
  { id: 'm19', ingredients: ['nacl', 'h2o', 'co2'], result: 'nahco3', equation: 'NaCl + H₂O + CO₂ + NH₃ → NaHCO₃ + NH₄Cl', reactionType: 'обмін', explanation: 'Процес Сольве для виробництва соди.', conditions: 'Охолодження', energy: 'ендотермічна', application: 'Харчова та хімічна промисловість', isMultiIngredient: true, difficulty: 'expert' },
  { id: 'm20', ingredients: ['si', 'c', 'o2'], result: 'sio2', equation: 'Si + C + O₂ → SiO₂ + CO', reactionType: 'синтез', explanation: 'Високотемпературний синтез кварцу.', conditions: 'Дугова піч', energy: 'екзотермічна', application: 'Виробництво скла', isMultiIngredient: true, difficulty: 'hard' },
];

export const findRecipe = (ingredient1: string, ingredient2: string): Recipe | undefined => {
  return recipes.find(
    r => r.ingredients.length === 2 &&
         ((r.ingredients[0] === ingredient1 && r.ingredients[1] === ingredient2) ||
          (r.ingredients[0] === ingredient2 && r.ingredients[1] === ingredient1))
  );
};

export const findMultiRecipe = (ingredients: string[]): Recipe | undefined => {
  const sortedIngredients = [...ingredients].sort();
  
  const allRecipes = [...recipes, ...multiIngredientRecipes];
  
  return allRecipes.find(recipe => {
    const sortedRecipeIngredients = [...recipe.ingredients].sort();
    if (sortedRecipeIngredients.length !== sortedIngredients.length) return false;
    return sortedRecipeIngredients.every((ing, idx) => ing === sortedIngredients[idx]);
  });
};

export const getRecipesByElement = (elementId: string): Recipe[] => {
  const allRecipes = [...recipes, ...multiIngredientRecipes];
  return allRecipes.filter(
    r => r.ingredients.includes(elementId) || r.result === elementId
  );
};

export const getRecipeById = (id: string): Recipe | undefined => {
  const allRecipes = [...recipes, ...multiIngredientRecipes];
  return allRecipes.find(r => r.id === id);
};

export const getAllRecipes = (): Recipe[] => {
  return [...recipes, ...multiIngredientRecipes];
};
