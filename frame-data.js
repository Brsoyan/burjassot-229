window.FRAME={
 "geom": {
  "lift": [
   0.15,
   1.3,
   11.55,
   12.7
  ],
  "stair": [
   0.15,
   2.1,
   12.85,
   15.15
  ],
  "core_x": 2.15,
  "atico": [
   [
    0,
    3.6
   ],
   [
    4.5,
    3.6
   ],
   [
    4.5,
    9.0
   ],
   [
    4.29,
    11.4
   ],
   [
    2.95,
    15.3
   ],
   [
    0,
    15.3
   ]
  ],
  "slab_t_m": 0.13,
  "micropile": {
   "d_mm": "150–200",
   "L_m": 15.0,
   "comp_kN": 250.0,
   "tens_kN": 150.0
  },
  "tie_beam": "40×50 cm"
 },
 "options": {
  "A": {
   "lift": true,
   "storeys": [
    {
     "name": "PB",
     "h": 4.0,
     "z0": 0.0
    },
    {
     "name": "P1",
     "h": 3.0,
     "z0": 4.0
    },
    {
     "name": "P2",
     "h": 3.0,
     "z0": 7.0
    },
    {
     "name": "P3",
     "h": 3.0,
     "z0": 10.0
    },
    {
     "name": "Ático",
     "h": 3.0,
     "z0": 13.0
    }
   ],
   "cornice_m": 13.0,
   "top_m": 16.0,
   "slabs": [
    {
     "i": 1,
     "z": 4.0,
     "type": "typical",
     "storey_below": "PB",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.68
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.96
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.93
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.81
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.67
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.29
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.28
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.6
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.59
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.39
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.54
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 2,
     "z": 7.0,
     "type": "typical",
     "storey_below": "P1",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.63
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.21
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 3,
     "z": 10.0,
     "type": "typical",
     "storey_below": "P2",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.78
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.94
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.56
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.14
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.14
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 4,
     "z": 13.0,
     "type": "cornice",
     "storey_below": "P3",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.71
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.72
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 220",
       "group": "floor",
       "util": 0.84
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.92
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.5
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.09
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.09
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.8
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.76
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 5,
     "z": 16.0,
     "type": "roof",
     "storey_below": "Ático",
     "beams": [
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.96
      },
      {
       "id": "B17",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 4.3,
       "L": 1.0,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.09
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.35
      },
      {
       "id": "B18",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.4,
       "y2": 8.07,
       "L": 2.404,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.75
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "roof",
       "util": 0.73
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.33
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.03
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.03
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.88
      },
      {
       "id": "B19",
       "x1": 4.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.77,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B20",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.401,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.15
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.42
      }
     ]
    }
   ],
   "columns": [
    {
     "id": "C1",
     "x": 0.3,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C2",
     "x": 3.385,
     "y": 0.6,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C3",
     "x": 7.41,
     "y": 0.6,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C4",
     "x": 0.3,
     "y": 4.3,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C5",
     "x": 3.4,
     "y": 4.3,
     "profiles": [
      "HEB 220",
      "HEB 220",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C6",
     "x": 6.14,
     "y": 4.3,
     "profiles": [
      "HEB 220",
      "HEB 220",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C7",
     "x": 0.3,
     "y": 8.2,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C8",
     "x": 2.0,
     "y": 8.2,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C9",
     "x": 4.86,
     "y": 8.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C10",
     "x": 0.3,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C11",
     "x": 3.71,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C12",
     "x": 0.3,
     "y": 15.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C13",
     "x": 2.46,
     "y": 15.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C14",
     "x": 4.4,
     "y": 4.3,
     "profiles": [
      null,
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    },
    {
     "id": "C15",
     "x": 4.4,
     "y": 8.07,
     "profiles": [
      null,
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    }
   ],
   "bracing": [
    {
     "plane": "party",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø30",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø24",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø20",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x0",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 90x90x5",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø36",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø27",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x1",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø36",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø27",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø24",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C15"
        ]
       ]
      }
     ]
    },
    {
     "plane": "back",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 120x120x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "SHS 120x120x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "SHS 100x100x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "SHS 90x90x5",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø36",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      }
     ]
    }
   ],
   "caps": [
    {
     "id": "C1",
     "n_mp": 2,
     "N_sls": 160,
     "T_sls": 124,
     "base": "HEB 140"
    },
    {
     "id": "C2",
     "n_mp": 2,
     "N_sls": 302,
     "T_sls": 233,
     "base": "HEB 160"
    },
    {
     "id": "C3",
     "n_mp": 2,
     "N_sls": 275,
     "T_sls": 226,
     "base": "HEB 160"
    },
    {
     "id": "C4",
     "n_mp": 2,
     "N_sls": 356,
     "T_sls": 37,
     "base": "HEB 160"
    },
    {
     "id": "C5",
     "n_mp": 4,
     "N_sls": 821,
     "T_sls": -215,
     "base": "HEB 220"
    },
    {
     "id": "C6",
     "n_mp": 4,
     "N_sls": 750,
     "T_sls": -262,
     "base": "HEB 220"
    },
    {
     "id": "C7",
     "n_mp": 2,
     "N_sls": 141,
     "T_sls": 105,
     "base": "HEB 140"
    },
    {
     "id": "C8",
     "n_mp": 3,
     "N_sls": 504,
     "T_sls": -47,
     "base": "HEB 180"
    },
    {
     "id": "C9",
     "n_mp": 3,
     "N_sls": 537,
     "T_sls": -9,
     "base": "HEB 200"
    },
    {
     "id": "C10",
     "n_mp": 2,
     "N_sls": 350,
     "T_sls": 24,
     "base": "HEB 160"
    },
    {
     "id": "C11",
     "n_mp": 2,
     "N_sls": 334,
     "T_sls": 261,
     "base": "HEB 160"
    },
    {
     "id": "C12",
     "n_mp": 3,
     "N_sls": 528,
     "T_sls": -315,
     "base": "HEB 200"
    },
    {
     "id": "C13",
     "n_mp": 3,
     "N_sls": 576,
     "T_sls": -270,
     "base": "HEB 200"
    }
   ]
  },
  "B": {
   "lift": true,
   "storeys": [
    {
     "name": "PB",
     "h": 4.0,
     "z0": 0.0
    },
    {
     "name": "P1",
     "h": 3.0,
     "z0": 4.0
    },
    {
     "name": "P2",
     "h": 3.0,
     "z0": 7.0
    },
    {
     "name": "Ático",
     "h": 3.0,
     "z0": 10.0
    }
   ],
   "cornice_m": 10.0,
   "top_m": 13.0,
   "slabs": [
    {
     "i": 1,
     "z": 4.0,
     "type": "typical",
     "storey_below": "PB",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.68
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.96
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.95
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.62
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.6
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.59
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.39
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.54
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 2,
     "z": 7.0,
     "type": "typical",
     "storey_below": "P1",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.77
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.94
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.55
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.15
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.15
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 3,
     "z": 10.0,
     "type": "cornice",
     "storey_below": "P2",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.71
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.72
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 220",
       "group": "floor",
       "util": 0.84
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.91
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.49
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.08
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.08
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.25
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.8
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.76
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.43
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.2
      }
     ]
    },
    {
     "i": 4,
     "z": 13.0,
     "type": "roof",
     "storey_below": "Ático",
     "beams": [
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.96
      },
      {
       "id": "B17",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 4.3,
       "L": 1.0,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.09
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.35
      },
      {
       "id": "B18",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.4,
       "y2": 8.07,
       "L": 2.404,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.75
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "roof",
       "util": 0.73
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.33
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.02
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.02
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.88
      },
      {
       "id": "B19",
       "x1": 4.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.77,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B20",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.401,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.15
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.42
      }
     ]
    }
   ],
   "columns": [
    {
     "id": "C1",
     "x": 0.3,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C2",
     "x": 3.385,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C3",
     "x": 7.41,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C4",
     "x": 0.3,
     "y": 4.3,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C5",
     "x": 3.4,
     "y": 4.3,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C6",
     "x": 6.14,
     "y": 4.3,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C7",
     "x": 0.3,
     "y": 8.2,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C8",
     "x": 2.0,
     "y": 8.2,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C9",
     "x": 4.86,
     "y": 8.05,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C10",
     "x": 0.3,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C11",
     "x": 3.71,
     "y": 11.4,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C12",
     "x": 0.3,
     "y": 15.05,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C13",
     "x": 2.46,
     "y": 15.05,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C14",
     "x": 4.4,
     "y": 4.3,
     "profiles": [
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    },
    {
     "id": "C15",
     "x": 4.4,
     "y": 8.07,
     "profiles": [
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    }
   ],
   "bracing": [
    {
     "plane": "party",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø27",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø20",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x0",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø36",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø27",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x1",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø36",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø27",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C15"
        ]
       ]
      }
     ]
    },
    {
     "plane": "back",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø30",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø24",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      }
     ]
    }
   ],
   "caps": [
    {
     "id": "C1",
     "n_mp": 2,
     "N_sls": 117,
     "T_sls": 90,
     "base": "HEB 140"
    },
    {
     "id": "C2",
     "n_mp": 2,
     "N_sls": 220,
     "T_sls": 168,
     "base": "HEB 140"
    },
    {
     "id": "C3",
     "n_mp": 2,
     "N_sls": 191,
     "T_sls": 154,
     "base": "HEB 140"
    },
    {
     "id": "C4",
     "n_mp": 2,
     "N_sls": 253,
     "T_sls": 59,
     "base": "HEB 160"
    },
    {
     "id": "C5",
     "n_mp": 3,
     "N_sls": 561,
     "T_sls": -83,
     "base": "HEB 200"
    },
    {
     "id": "C6",
     "n_mp": 2,
     "N_sls": 488,
     "T_sls": -137,
     "base": "HEB 180"
    },
    {
     "id": "C7",
     "n_mp": 2,
     "N_sls": 112,
     "T_sls": 84,
     "base": "HEB 140"
    },
    {
     "id": "C8",
     "n_mp": 2,
     "N_sls": 341,
     "T_sls": 22,
     "base": "HEB 160"
    },
    {
     "id": "C9",
     "n_mp": 2,
     "N_sls": 354,
     "T_sls": 40,
     "base": "HEB 160"
    },
    {
     "id": "C10",
     "n_mp": 2,
     "N_sls": 256,
     "T_sls": 53,
     "base": "HEB 160"
    },
    {
     "id": "C11",
     "n_mp": 2,
     "N_sls": 256,
     "T_sls": 199,
     "base": "HEB 140"
    },
    {
     "id": "C12",
     "n_mp": 2,
     "N_sls": 346,
     "T_sls": -180,
     "base": "HEB 160"
    },
    {
     "id": "C13",
     "n_mp": 2,
     "N_sls": 381,
     "T_sls": -146,
     "base": "HEB 180"
    }
   ]
  },
  "A0": {
   "lift": false,
   "storeys": [
    {
     "name": "PB",
     "h": 4.0,
     "z0": 0.0
    },
    {
     "name": "P1",
     "h": 3.0,
     "z0": 4.0
    },
    {
     "name": "P2",
     "h": 3.0,
     "z0": 7.0
    },
    {
     "name": "P3",
     "h": 3.0,
     "z0": 10.0
    },
    {
     "name": "Ático",
     "h": 3.0,
     "z0": 13.0
    }
   ],
   "cornice_m": 13.0,
   "top_m": 16.0,
   "slabs": [
    {
     "i": 1,
     "z": 4.0,
     "type": "typical",
     "storey_below": "PB",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.68
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.96
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.93
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.81
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.68
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.29
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.28
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.6
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.59
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.39
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.54
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 2,
     "z": 7.0,
     "type": "typical",
     "storey_below": "P1",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.63
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.21
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 3,
     "z": 10.0,
     "type": "typical",
     "storey_below": "P2",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.78
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.94
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.56
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.14
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.14
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 4,
     "z": 13.0,
     "type": "cornice",
     "storey_below": "P3",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.71
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.72
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 220",
       "group": "floor",
       "util": 0.84
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.92
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.5
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.09
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.09
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.8
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.76
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 5,
     "z": 16.0,
     "type": "roof",
     "storey_below": "Ático",
     "beams": [
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.96
      },
      {
       "id": "B17",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 4.3,
       "L": 1.0,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.09
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.35
      },
      {
       "id": "B18",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.4,
       "y2": 8.07,
       "L": 2.404,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.75
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "roof",
       "util": 0.73
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.33
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.03
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.03
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B19",
       "x1": 4.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.77,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B20",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.401,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.15
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.42
      }
     ]
    }
   ],
   "columns": [
    {
     "id": "C1",
     "x": 0.3,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C2",
     "x": 3.385,
     "y": 0.6,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C3",
     "x": 7.41,
     "y": 0.6,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C4",
     "x": 0.3,
     "y": 4.3,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C5",
     "x": 3.4,
     "y": 4.3,
     "profiles": [
      "HEB 220",
      "HEB 220",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C6",
     "x": 6.14,
     "y": 4.3,
     "profiles": [
      "HEB 220",
      "HEB 220",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C7",
     "x": 0.3,
     "y": 8.2,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C8",
     "x": 2.0,
     "y": 8.2,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C9",
     "x": 4.86,
     "y": 8.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C10",
     "x": 0.3,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C11",
     "x": 3.71,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C12",
     "x": 0.3,
     "y": 15.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C13",
     "x": 2.46,
     "y": 15.05,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C14",
     "x": 4.4,
     "y": 4.3,
     "profiles": [
      null,
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    },
    {
     "id": "C15",
     "x": 4.4,
     "y": 8.07,
     "profiles": [
      null,
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    }
   ],
   "bracing": [
    {
     "plane": "party",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø30",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø24",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø20",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x0",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 90x90x5",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø36",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø27",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x1",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø36",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø27",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø24",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C15"
        ]
       ]
      }
     ]
    },
    {
     "plane": "back",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 120x120x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "SHS 120x120x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "SHS 100x100x6",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "SHS 90x90x5",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 4,
       "profile": "Ø36",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      }
     ]
    }
   ],
   "caps": [
    {
     "id": "C1",
     "n_mp": 2,
     "N_sls": 160,
     "T_sls": 124,
     "base": "HEB 140"
    },
    {
     "id": "C2",
     "n_mp": 2,
     "N_sls": 302,
     "T_sls": 233,
     "base": "HEB 160"
    },
    {
     "id": "C3",
     "n_mp": 2,
     "N_sls": 275,
     "T_sls": 226,
     "base": "HEB 160"
    },
    {
     "id": "C4",
     "n_mp": 2,
     "N_sls": 356,
     "T_sls": 37,
     "base": "HEB 160"
    },
    {
     "id": "C5",
     "n_mp": 4,
     "N_sls": 821,
     "T_sls": -215,
     "base": "HEB 220"
    },
    {
     "id": "C6",
     "n_mp": 4,
     "N_sls": 750,
     "T_sls": -262,
     "base": "HEB 220"
    },
    {
     "id": "C7",
     "n_mp": 2,
     "N_sls": 141,
     "T_sls": 105,
     "base": "HEB 140"
    },
    {
     "id": "C8",
     "n_mp": 3,
     "N_sls": 504,
     "T_sls": -47,
     "base": "HEB 180"
    },
    {
     "id": "C9",
     "n_mp": 3,
     "N_sls": 537,
     "T_sls": -9,
     "base": "HEB 200"
    },
    {
     "id": "C10",
     "n_mp": 2,
     "N_sls": 350,
     "T_sls": 23,
     "base": "HEB 160"
    },
    {
     "id": "C11",
     "n_mp": 2,
     "N_sls": 338,
     "T_sls": 263,
     "base": "HEB 160"
    },
    {
     "id": "C12",
     "n_mp": 3,
     "N_sls": 528,
     "T_sls": -316,
     "base": "HEB 200"
    },
    {
     "id": "C13",
     "n_mp": 3,
     "N_sls": 577,
     "T_sls": -270,
     "base": "HEB 200"
    }
   ]
  },
  "B0": {
   "lift": false,
   "storeys": [
    {
     "name": "PB",
     "h": 4.0,
     "z0": 0.0
    },
    {
     "name": "P1",
     "h": 3.0,
     "z0": 4.0
    },
    {
     "name": "P2",
     "h": 3.0,
     "z0": 7.0
    },
    {
     "name": "Ático",
     "h": 3.0,
     "z0": 10.0
    }
   ],
   "cornice_m": 10.0,
   "top_m": 13.0,
   "slabs": [
    {
     "i": 1,
     "z": 4.0,
     "type": "typical",
     "storey_below": "PB",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.68
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.96
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.95
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.62
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.22
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.6
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.59
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.39
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.54
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 2,
     "z": 7.0,
     "type": "typical",
     "storey_below": "P1",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.74
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.79
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.83
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.77
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 180",
       "group": "floor",
       "util": 0.94
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.55
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.15
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.15
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.86
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.87
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 160",
       "group": "facade",
       "util": 0.85
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.78
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 3,
     "z": 10.0,
     "type": "cornice",
     "storey_below": "P2",
     "beams": [
      {
       "id": "B1",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 3.385,
       "y2": 0.6,
       "L": 3.085,
       "profile": "IPE 200",
       "group": "facade",
       "util": 0.71
      },
      {
       "id": "B2",
       "x1": 3.385,
       "y1": 0.6,
       "x2": 7.41,
       "y2": 0.6,
       "L": 4.025,
       "profile": "IPE 240",
       "group": "facade",
       "util": 0.72
      },
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.96
      },
      {
       "id": "B4",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 6.14,
       "y2": 4.3,
       "L": 2.74,
       "profile": "IPE 220",
       "group": "floor",
       "util": 0.84
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.42
      },
      {
       "id": "B6",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.86,
       "y2": 8.05,
       "L": 2.864,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.91
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "floor",
       "util": 0.87
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "floor",
       "util": 0.49
      },
      {
       "id": "B9",
       "x1": 0.3,
       "y1": 0.6,
       "x2": 0.3,
       "y2": 4.3,
       "L": 3.7,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.0
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.08
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.08
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 200",
       "group": "party",
       "util": 0.34
      },
      {
       "id": "B13",
       "x1": 6.14,
       "y1": 4.3,
       "x2": 7.41,
       "y2": 0.6,
       "L": 3.912,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B14",
       "x1": 4.86,
       "y1": 8.05,
       "x2": 6.14,
       "y2": 4.3,
       "L": 3.962,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.66
      },
      {
       "id": "B15",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.86,
       "y2": 8.05,
       "L": 3.542,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.8
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 180",
       "group": "facade",
       "util": 0.76
      },
      {
       "id": "T1",
       "x1": 2.15,
       "y1": 11.4,
       "x2": 2.15,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.48
      },
      {
       "id": "TR",
       "x1": 0.3,
       "y1": 12.78,
       "x2": 2.15,
       "y2": 12.78,
       "L": 1.85,
       "profile": "IPE 160",
       "group": "core",
       "util": 0.25
      }
     ]
    },
    {
     "i": 4,
     "z": 13.0,
     "type": "roof",
     "storey_below": "Ático",
     "beams": [
      {
       "id": "B3",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 3.4,
       "y2": 4.3,
       "L": 3.1,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.96
      },
      {
       "id": "B17",
       "x1": 3.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 4.3,
       "L": 1.0,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.09
      },
      {
       "id": "B5",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 2.0,
       "y2": 8.2,
       "L": 1.7,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.35
      },
      {
       "id": "B18",
       "x1": 2.0,
       "y1": 8.2,
       "x2": 4.4,
       "y2": 8.07,
       "L": 2.404,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.75
      },
      {
       "id": "B7",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.41,
       "profile": "IPE 200",
       "group": "roof",
       "util": 0.73
      },
      {
       "id": "B8",
       "x1": 0.3,
       "y1": 15.05,
       "x2": 2.46,
       "y2": 15.05,
       "L": 2.16,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.33
      },
      {
       "id": "B10",
       "x1": 0.3,
       "y1": 4.3,
       "x2": 0.3,
       "y2": 8.2,
       "L": 3.9,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.02
      },
      {
       "id": "B11",
       "x1": 0.3,
       "y1": 8.2,
       "x2": 0.3,
       "y2": 11.4,
       "L": 3.2,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.02
      },
      {
       "id": "B12",
       "x1": 0.3,
       "y1": 11.4,
       "x2": 0.3,
       "y2": 15.05,
       "L": 3.65,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B19",
       "x1": 4.4,
       "y1": 4.3,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.77,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.0
      },
      {
       "id": "B20",
       "x1": 3.71,
       "y1": 11.4,
       "x2": 4.4,
       "y2": 8.07,
       "L": 3.401,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.15
      },
      {
       "id": "B16",
       "x1": 2.46,
       "y1": 15.05,
       "x2": 3.71,
       "y2": 11.4,
       "L": 3.858,
       "profile": "IPE 160",
       "group": "roof",
       "util": 0.42
      }
     ]
    }
   ],
   "columns": [
    {
     "id": "C1",
     "x": 0.3,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C2",
     "x": 3.385,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C3",
     "x": 7.41,
     "y": 0.6,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C4",
     "x": 0.3,
     "y": 4.3,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C5",
     "x": 3.4,
     "y": 4.3,
     "profiles": [
      "HEB 200",
      "HEB 200",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C6",
     "x": 6.14,
     "y": 4.3,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C7",
     "x": 0.3,
     "y": 8.2,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C8",
     "x": 2.0,
     "y": 8.2,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C9",
     "x": 4.86,
     "y": 8.05,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      null
     ],
     "post": false
    },
    {
     "id": "C10",
     "x": 0.3,
     "y": 11.4,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C11",
     "x": 3.71,
     "y": 11.4,
     "profiles": [
      "HEB 140",
      "HEB 140",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C12",
     "x": 0.3,
     "y": 15.05,
     "profiles": [
      "HEB 160",
      "HEB 160",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C13",
     "x": 2.46,
     "y": 15.05,
     "profiles": [
      "HEB 180",
      "HEB 180",
      "HEB 140",
      "HEB 140"
     ],
     "post": false
    },
    {
     "id": "C14",
     "x": 4.4,
     "y": 4.3,
     "profiles": [
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    },
    {
     "id": "C15",
     "x": 4.4,
     "y": 8.07,
     "profiles": [
      null,
      null,
      null,
      "HEB 120"
     ],
     "post": true
    }
   ],
   "bracing": [
    {
     "plane": "party",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø27",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø20",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C4",
         "C7"
        ],
        [
         "C7",
         "C10"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x0",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø36",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø27",
       "bays": [
        [
         "C5",
         "C6"
        ]
       ]
      }
     ]
    },
    {
     "plane": "x1",
     "storeys": [
      {
       "k": 0,
       "profile": "Ø36",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø27",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C9"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø20",
       "bays": [
        [
         "C8",
         "C15"
        ]
       ]
      }
     ]
    },
    {
     "plane": "back",
     "storeys": [
      {
       "k": 0,
       "profile": "SHS 80x80x4",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 1,
       "profile": "Ø30",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 2,
       "profile": "Ø24",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      },
      {
       "k": 3,
       "profile": "Ø16",
       "bays": [
        [
         "C12",
         "C13"
        ]
       ]
      }
     ]
    }
   ],
   "caps": [
    {
     "id": "C1",
     "n_mp": 2,
     "N_sls": 117,
     "T_sls": 90,
     "base": "HEB 140"
    },
    {
     "id": "C2",
     "n_mp": 2,
     "N_sls": 220,
     "T_sls": 168,
     "base": "HEB 140"
    },
    {
     "id": "C3",
     "n_mp": 2,
     "N_sls": 191,
     "T_sls": 154,
     "base": "HEB 140"
    },
    {
     "id": "C4",
     "n_mp": 2,
     "N_sls": 253,
     "T_sls": 59,
     "base": "HEB 160"
    },
    {
     "id": "C5",
     "n_mp": 3,
     "N_sls": 561,
     "T_sls": -83,
     "base": "HEB 200"
    },
    {
     "id": "C6",
     "n_mp": 2,
     "N_sls": 488,
     "T_sls": -137,
     "base": "HEB 180"
    },
    {
     "id": "C7",
     "n_mp": 2,
     "N_sls": 112,
     "T_sls": 84,
     "base": "HEB 140"
    },
    {
     "id": "C8",
     "n_mp": 2,
     "N_sls": 341,
     "T_sls": 22,
     "base": "HEB 160"
    },
    {
     "id": "C9",
     "n_mp": 2,
     "N_sls": 354,
     "T_sls": 40,
     "base": "HEB 160"
    },
    {
     "id": "C10",
     "n_mp": 2,
     "N_sls": 249,
     "T_sls": 49,
     "base": "HEB 160"
    },
    {
     "id": "C11",
     "n_mp": 2,
     "N_sls": 259,
     "T_sls": 201,
     "base": "HEB 140"
    },
    {
     "id": "C12",
     "n_mp": 2,
     "N_sls": 344,
     "T_sls": -181,
     "base": "HEB 160"
    },
    {
     "id": "C13",
     "n_mp": 2,
     "N_sls": 382,
     "T_sls": -146,
     "base": "HEB 180"
    }
   ]
  }
 }
};
