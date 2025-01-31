import {
  FaClock,
  FaBrain,
  FaBookOpen,
  FaChartLine,
  FaCog,
} from "react-icons/fa";

// Sidebar navigation links
export const SIDE_LINKS = [
  {'href': '/timer', 'title': 'Timer', 'icon': FaClock},
  {'href': '/memorize', 'title': 'Memorize', 'icon': FaBrain},
  {'href': '/learn', 'title': 'Learn', 'icon': FaBookOpen},
  {'href': '/stats', 'title': 'Stats', 'icon': FaChartLine},
  {'href': '/settings', 'title': 'Settings', 'icon': FaCog},
];

// Home page dropdown header links
export const HOME_LINKS = [
  {'href': '/timer', 'title': 'Timer'},
  {'href': '/memorize', 'title': 'Memorize'},
  {'href': '/learn', 'title': 'Learn'},
  {'href': '/stats', 'title': 'Stats'},
  {'href': '/settings', 'title': 'Settings'},
  {'href': '/about', 'title': 'About'}
]

// Learn page dropdown header links
export const LEARN_LINKS = [
  {'href': '/learn/notation', 'title': 'Notation', 'subLinks': [
    {'href': '/learn/notation/letters', 'title': 'Letters'},
    {'href': '/learn/notation/moves', 'title': 'Moves'},
    {'href': '/learn/notation/rotations', 'title': 'Rotations'}
  ]},
  {'href': '/learn/corners', 'title': 'Corners'},
  {'href': '/learn/edges', 'title': 'Edges'},
  {'href': '/learn/parity', 'title': 'Parity'}
];