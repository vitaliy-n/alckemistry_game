import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'first_reaction',
    name: 'Перший крок',
    description: 'Проведіть першу хімічну реакцію',
    icon: '🧪',
    condition: (_, reactions) => reactions.length >= 1
  },
  {
    id: 'apprentice',
    name: 'Учень хіміка',
    description: 'Проведіть 10 реакцій',
    icon: '📚',
    condition: (_, reactions) => reactions.length >= 10
  },
  {
    id: 'chemist',
    name: 'Хімік',
    description: 'Проведіть 25 реакцій',
    icon: '🔬',
    condition: (_, reactions) => reactions.length >= 25
  },
  {
    id: 'master_chemist',
    name: 'Майстер хімії',
    description: 'Проведіть 50 реакцій',
    icon: '🏆',
    condition: (_, reactions) => reactions.length >= 50
  },
  {
    id: 'alchemist',
    name: 'Алхімік',
    description: 'Проведіть 100 реакцій',
    icon: '⚗️',
    condition: (_, reactions) => reactions.length >= 100
  },
  {
    id: 'water_lover',
    name: 'Водолюб',
    description: 'Відкрийте 5 речовин, пов\'язаних з водою',
    icon: '💧',
    condition: (elements) => {
      const waterRelated = ['h2o', 'h2o2', 'naoh', 'koh', 'caoh2', 'mgoh2', 'baoh2', 'h2co3', 'h2so3', 'h2so4'];
      return elements.filter(e => waterRelated.includes(e)).length >= 5;
    }
  },
  {
    id: 'acid_master',
    name: 'Майстер кислот',
    description: 'Відкрийте 5 різних кислот',
    icon: '🧪',
    condition: (elements) => {
      const acids = ['hcl', 'h2so4', 'hno3', 'h2co3', 'h3po4', 'h2so3', 'ch3cooh'];
      return elements.filter(e => acids.includes(e)).length >= 5;
    }
  },
  {
    id: 'salt_collector',
    name: 'Колекціонер солей',
    description: 'Відкрийте 10 різних солей',
    icon: '🧂',
    condition: (elements) => {
      const salts = ['nacl', 'kcl', 'cacl2', 'mgcl2', 'fecl2', 'fecl3', 'cucl2', 'zncl2', 'alcl3', 'agcl', 'bacl2', 'na2so4', 'mgso4', 'feso4', 'cuso4', 'znso4', 'caso4', 'baso4', 'na2co3', 'nahco3', 'caco3', 'nano3', 'kno3', 'agno3', 'nh4cl', 'nh4no3'];
      return elements.filter(e => salts.includes(e)).length >= 10;
    }
  },
  {
    id: 'metallurgist',
    name: 'Металург',
    description: 'Проведіть реакції з усіма базовими металами',
    icon: '⚒️',
    condition: (elements) => {
      const metalCompounds = ['nacl', 'naoh', 'na2o', 'kcl', 'koh', 'k2o', 'cacl2', 'caoh2', 'cao', 'mgcl2', 'mgoh2', 'mgo', 'fes', 'fe2o3', 'fecl2'];
      return elements.filter(e => metalCompounds.includes(e)).length >= 10;
    }
  },
  {
    id: 'pyroman',
    name: 'Піроман',
    description: 'Проведіть 10 екзотермічних реакцій',
    icon: '🔥',
    condition: (_, reactions) => reactions.length >= 10
  },
  {
    id: 'gas_specialist',
    name: 'Газовий спеціаліст',
    description: 'Відкрийте 5 різних газів',
    icon: '💨',
    condition: (elements) => {
      const gases = ['co2', 'so2', 'h2s', 'nh3', 'no', 'no2', 'n2o', 'co', 'ch4'];
      return elements.filter(e => gases.includes(e)).length >= 5;
    }
  },
  {
    id: 'oxide_expert',
    name: 'Експерт оксидів',
    description: 'Відкрийте 8 різних оксидів',
    icon: '🌋',
    condition: (elements) => {
      const oxides = ['h2o', 'co2', 'so2', 'so3', 'na2o', 'k2o', 'cao', 'mgo', 'fe2o3', 'feo', 'cuo', 'zno', 'al2o3', 'pbo', 'p2o5', 'sio2', 'no', 'no2', 'n2o', 'co', 'fe3o4'];
      return elements.filter(e => oxides.includes(e)).length >= 8;
    }
  },
  {
    id: 'base_builder',
    name: 'Будівник основ',
    description: 'Відкрийте 5 різних основ',
    icon: '🏗️',
    condition: (elements) => {
      const bases = ['naoh', 'koh', 'caoh2', 'mgoh2', 'baoh2', 'feoh2', 'feoh3', 'cuoh2', 'znoh2', 'aloh3'];
      return elements.filter(e => bases.includes(e)).length >= 5;
    }
  },
  {
    id: 'explorer',
    name: 'Дослідник',
    description: 'Відкрийте 20 нових речовин',
    icon: '🔍',
    condition: (elements) => elements.length >= 20
  },
  {
    id: 'scientist',
    name: 'Науковець',
    description: 'Відкрийте 40 нових речовин',
    icon: '👨‍🔬',
    condition: (elements) => elements.length >= 40
  },
  {
    id: 'professor',
    name: 'Професор',
    description: 'Відкрийте 60 нових речовин',
    icon: '🎓',
    condition: (elements) => elements.length >= 60
  },
  {
    id: 'nobel_laureate',
    name: 'Нобелівський лауреат',
    description: 'Відкрийте всі речовини',
    icon: '🏅',
    condition: (elements) => elements.length >= 90
  },
  {
    id: 'iron_worker',
    name: 'Залізних справ майстер',
    description: 'Відкрийте всі сполуки заліза',
    icon: '🔩',
    condition: (elements) => {
      const ironCompounds = ['fes', 'fe2o3', 'feo', 'fecl2', 'fecl3', 'feso4', 'feoh2', 'feoh3', 'fe3o4'];
      return elements.filter(e => ironCompounds.includes(e)).length >= 7;
    }
  },
  {
    id: 'copper_master',
    name: 'Мідних справ майстер',
    description: 'Відкрийте всі сполуки міді',
    icon: '🟫',
    condition: (elements) => {
      const copperCompounds = ['cuo', 'cuoh2', 'cuso4', 'cucl2'];
      return elements.filter(e => copperCompounds.includes(e)).length >= 4;
    }
  },
  {
    id: 'neutralizer',
    name: 'Нейтралізатор',
    description: 'Проведіть 5 реакцій нейтралізації',
    icon: '⚖️',
    condition: (_, reactions) => reactions.length >= 5
  }
];

export const getAchievementById = (id: string): Achievement | undefined => {
  return achievements.find(a => a.id === id);
};

export const checkAchievements = (
  discoveredElements: string[],
  completedReactions: string[],
  unlockedAchievements: string[]
): Achievement[] => {
  const newAchievements: Achievement[] = [];
  
  for (const achievement of achievements) {
    if (!unlockedAchievements.includes(achievement.id)) {
      if (achievement.condition(discoveredElements, completedReactions)) {
        newAchievements.push(achievement);
      }
    }
  }
  
  return newAchievements;
};
