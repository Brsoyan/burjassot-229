window.STEEL={
  "meta": {
    "title": {
      "en": "Av. Burjassot 229 — steel frame pre-dimensioning (Options A and B)",
      "es": "Av. Burjassot 229 — predimensionado de estructura metálica (Opciones A y B)"
    },
    "status": {
      "en": "CONCEPT-STAGE PRE-DIMENSIONING. Not a construction design. To be verified and signed by a licensed structural engineer / architect, on the basis of a geotechnical study.",
      "es": "PREDIMENSIONADO EN FASE DE ANTEPROYECTO. No es un proyecto de ejecución. Debe ser comprobado y firmado por técnico competente (arquitecto / ingeniero de estructuras) a partir de un estudio geotécnico."
    },
    "codes": [
      "CTE DB-SE",
      "CTE DB-SE-AE",
      "CTE DB-SE-A",
      "CTE DB-SE-C",
      "CTE DB-SI",
      "NCSE-02",
      "Código Estructural (RD 470/2021)",
      "UNE-EN 1993-1-1",
      "UNE-EN 1994-1-1 / 1994-1-2",
      "UNE-EN 1090-2"
    ],
    "date": "2026-11-22"
  },
  "assumptions": [
    {
      "label": {
        "en": "Structural steel",
        "es": "Acero estructural"
      },
      "value": "S275JR, fy 275 MPa, E 210 GPa; γM0 = γM1 = 1.05, γM2 = 1.25"
    },
    {
      "label": {
        "en": "ULS combination",
        "es": "Combinación ELU"
      },
      "value": "1.35 G + 1.5 Q (+ 1.5·ψ0 for secondary variables: ψ0 = 0.7 use, 0.6 wind); favourable G 0.8"
    },
    {
      "label": {
        "en": "SLS deflection limits",
        "es": "Límites de flecha ELS"
      },
      "value": "active (G2+Q) ≤ L/400 (dry partitions), ≤ L/500 for beams carrying masonry facade; total (G+0.3Q) ≤ L/300"
    },
    {
      "label": {
        "en": "Composite slab",
        "es": "Forjado de chapa colaborante"
      },
      "value": "60 mm trapezoidal deck t = 0.8–1.0 mm, HA-25, total 13 cm on every floor; one line of props at mid-span during concreting for spans > 3.0 m"
    },
    {
      "label": {
        "en": "Beams",
        "es": "Vigas"
      },
      "value": "simply supported, non-composite (conservative); depth ≤ 300 mm, hidden in cross walls; +10 % on interior rows for deck continuity"
    },
    {
      "label": {
        "en": "Column buckling",
        "es": "Pandeo de pilares"
      },
      "value": "braced frame, Lcr = storey height (4.0 m PB, 3.0 m others), weak axis, curve c; N_Ed ≤ 0.85·Nb,Rd (allowance for nominal moments)"
    },
    {
      "label": {
        "en": "Retained facade",
        "es": "Fachada conservada"
      },
      "value": "solid brick, assumed 0.40 m thick, 18 kN/m³ (7.2 kN/m²), eaves 8.22 m; NOT loaded by new floors"
    },
    {
      "label": {
        "en": "Column offsets",
        "es": "Retranqueo de pilares"
      },
      "value": "0.30 m from party wall; centre 0.60 m behind Burjassot line; 0.55 m (perpendicular) behind Carrasqueta line"
    },
    {
      "label": {
        "en": "Wind",
        "es": "Viento"
      },
      "value": "CTE zone A, qb = 0.42 kN/m², roughness IV (urban), ce(z) Table 3.4, cp/cs Table 3.5; torsion eccentricity ±d/10"
    },
    {
      "label": {
        "en": "Seismic",
        "es": "Sismo"
      },
      "value": "NCSE-02: ab = 0.06 g, K = 1.0, soil C = 2.0 (soft, assumed) → ac ≈ 0.096 g; not mandatory (normal importance, braced in all directions, ab < 0.08 g, < 7 storeys)"
    },
    {
      "label": {
        "en": "Allowable bearing pressure (if footings)",
        "es": "Tensión admisible (si zapatas)"
      },
      "value": "150 kPa (assumed, soft alluvial clays/silts) — to be confirmed by the geotechnical study"
    },
    {
      "label": {
        "en": "Micropiles",
        "es": "Micropilotes"
      },
      "value": "Ø150–200 mm, steel tube N-80 88.9×7.5 mm, IRS/IR grout, ~15 m long; service load 250 kN compression, 150 kN tension (assumed)"
    },
    {
      "label": {
        "en": "Structural steel price",
        "es": "Precio acero estructural"
      },
      "value": "3.0–4.5 €/kg fabricated, primed and erected (Spain 2026)"
    },
    {
      "label": {
        "en": "Fire protection price",
        "es": "Precio protección contra incendios"
      },
      "value": "R60 intumescent paint: 0.45–0.80 €/kg"
    },
    {
      "label": {
        "en": "Composite slab price",
        "es": "Precio forjado colaborante"
      },
      "value": "55–85 €/m² incl. deck, concrete, mesh, top bars, studs and temporary props"
    },
    {
      "label": {
        "en": "Foundation prices",
        "es": "Precios de cimentación"
      },
      "value": "micropile 85–130 €/m; caps and tie beams 300–420 €/m³; rig mobilisation 4,000–7,000 €"
    },
    {
      "label": {
        "en": "Planta baja floor",
        "es": "Suelo de planta baja"
      },
      "value": "PB is a 2-bed flat: ventilated ground floor (forjado sanitario / solera ventilada) bearing on the ground and tie beams; its loads (G 2.0 + Q 2.0 kN/m²) go straight to the ground, not to the columns; not in steel totals"
    },
    {
      "label": {
        "en": "Not included in cost",
        "es": "No incluido en el coste"
      },
      "value": "facade stabiliser and demolition (≈ 25,000–50,000 €), ground slab, stair steps/handrails, lift, architecture, VAT, fees"
    }
  ],
  "loads": [
    {
      "label": {
        "en": "Composite slab self-weight 13 cm (incl. deck)",
        "es": "Peso propio forjado colaborante 13 cm (incl. chapa)"
      },
      "kN_m2": 2.62,
      "type": "G"
    },
    {
      "label": {
        "en": "Steel beams allowance",
        "es": "Repercusión de vigas metálicas"
      },
      "kN_m2": 0.25,
      "type": "G"
    },
    {
      "label": {
        "en": "Floor finishes + ceiling",
        "es": "Pavimento + falso techo"
      },
      "kN_m2": 1.0,
      "type": "G"
    },
    {
      "label": {
        "en": "Partitions (tabiquería)",
        "es": "Tabiquería"
      },
      "kN_m2": 1.0,
      "type": "G"
    },
    {
      "label": {
        "en": "Roof terrace build-up (slopes, membrane, insulation, pavers) + planters",
        "es": "Cubierta transitable (formación de pendientes, impermeabilización, aislamiento, solado) + jardineras"
      },
      "kN_m2": 3.0,
      "type": "G"
    },
    {
      "label": {
        "en": "Ático roof build-up (non-accessible)",
        "es": "Cubierta del ático (no transitable)"
      },
      "kN_m2": 2.0,
      "type": "G"
    },
    {
      "label": {
        "en": "Stair flights on plan (incl. finishes)",
        "es": "Escalera en proyección horizontal (incl. acabados)"
      },
      "kN_m2": 4.5,
      "type": "G"
    },
    {
      "label": {
        "en": "New street facade above +7.0 m (per m² of elevation; old cornice rebuilt on the new frame)",
        "es": "Fachada nueva por encima de +7,0 m (por m² de alzado; la cornisa antigua se rehace sobre la estructura nueva)"
      },
      "kN_m2": 2.0,
      "type": "G"
    },
    {
      "label": {
        "en": "Ático walls / back-boundary wall (per m² of elevation)",
        "es": "Muros del ático / cerramiento trasero (por m² de alzado)"
      },
      "kN_m2": 1.2,
      "type": "G"
    },
    {
      "label": {
        "en": "Retained old facade (per m² elevation; NOT carried by the frame, used for tie design)",
        "es": "Fachada antigua conservada (por m² de alzado; NO la soporta la estructura nueva, sólo para anclajes)"
      },
      "kN_m2": 7.2,
      "type": "G"
    },
    {
      "label": {
        "en": "Facade restraint tie force, 2 % of old facade weight (per m² elevation, per tie level)",
        "es": "Fuerza de atado de fachada, 2 % del peso (por m² de alzado y nivel de atado)"
      },
      "kN_m2": 0.144,
      "type": "G"
    },
    {
      "label": {
        "en": "Live load residential A1",
        "es": "Sobrecarga de uso residencial A1"
      },
      "kN_m2": 2.0,
      "type": "Q"
    },
    {
      "label": {
        "en": "Live load landings / stair (A1 + 1.0)",
        "es": "Sobrecarga en rellanos y escalera (A1 + 1,0)"
      },
      "kN_m2": 3.0,
      "type": "Q"
    },
    {
      "label": {
        "en": "Live load roof terrace (private access, as A)",
        "es": "Sobrecarga cubierta transitable (acceso privado, como A)"
      },
      "kN_m2": 2.0,
      "type": "Q"
    },
    {
      "label": {
        "en": "Live load ático roof (maintenance G1)",
        "es": "Sobrecarga cubierta del ático (mantenimiento G1)"
      },
      "kN_m2": 1.0,
      "type": "Q"
    },
    {
      "label": {
        "en": "Snow Valencia (not simultaneous with roof live load)",
        "es": "Nieve Valencia (no simultánea con la sobrecarga de cubierta)"
      },
      "kN_m2": 0.2,
      "type": "S"
    },
    {
      "label": {
        "en": "Wind basic pressure qb, zone A",
        "es": "Presión dinámica básica qb, zona A"
      },
      "kN_m2": 0.42,
      "type": "W"
    },
    {
      "label": {
        "en": "Wind net pressure at cornice, Option A (qb·ce·(cp−cs), x-direction)",
        "es": "Presión neta de viento en cornisa, Opción A (qb·ce·(cp−cs), dirección x)"
      },
      "kN_m2": 1.16,
      "type": "W"
    },
    {
      "label": {
        "en": "Wind net pressure at cornice, Option B",
        "es": "Presión neta de viento en cornisa, Opción B"
      },
      "kN_m2": 1.03,
      "type": "W"
    },
    {
      "label": {
        "en": "Seismic equivalent (indicative, NCSE-02 not mandatory) per m² of floor, Option A",
        "es": "Sismo equivalente (orientativo, NCSE-02 no obligatoria) por m² de planta, Opción A"
      },
      "kN_m2": 1.0,
      "type": "E"
    }
  ],
  "grid": {
    "columns": [
      {
        "id": "C1",
        "x": 0.3,
        "y": 0.6
      },
      {
        "id": "C2",
        "x": 3.385,
        "y": 0.6
      },
      {
        "id": "C3",
        "x": 7.41,
        "y": 0.6
      },
      {
        "id": "C4",
        "x": 0.3,
        "y": 4.3
      },
      {
        "id": "C5",
        "x": 3.4,
        "y": 4.3
      },
      {
        "id": "C6",
        "x": 6.14,
        "y": 4.3
      },
      {
        "id": "C7",
        "x": 0.3,
        "y": 8.2
      },
      {
        "id": "C8",
        "x": 2.0,
        "y": 8.2
      },
      {
        "id": "C9",
        "x": 4.86,
        "y": 8.05
      },
      {
        "id": "C10",
        "x": 0.3,
        "y": 11.4
      },
      {
        "id": "C11",
        "x": 3.71,
        "y": 11.4
      },
      {
        "id": "C12",
        "x": 0.3,
        "y": 15.05
      },
      {
        "id": "C13",
        "x": 2.46,
        "y": 15.05
      },
      {
        "id": "C14",
        "x": 4.4,
        "y": 4.3
      },
      {
        "id": "C15",
        "x": 4.4,
        "y": 8.07
      }
    ],
    "beams": [
      {
        "id": "B1",
        "from": "C1",
        "to": "C2",
        "role": {
          "en": "Burjassot facade beam, bay 1 (behind retained facade)",
          "es": "Viga de fachada Burjassot, vano 1 (tras la fachada conservada)"
        }
      },
      {
        "id": "B2",
        "from": "C2",
        "to": "C3",
        "role": {
          "en": "Burjassot facade beam, bay 2",
          "es": "Viga de fachada Burjassot, vano 2"
        }
      },
      {
        "id": "B3",
        "from": "C4",
        "to": "C5",
        "role": {
          "en": "Primary floor beam in cross wall y=4.3",
          "es": "Viga principal en tabique y=4,3"
        }
      },
      {
        "id": "B4",
        "from": "C5",
        "to": "C6",
        "role": {
          "en": "Primary floor beam y=4.3 + strut of braced bay C5–C6; carries ático post C14",
          "es": "Viga principal y=4,3 + montante del arriostramiento C5–C6; recibe el pilarillo C14 del ático"
        }
      },
      {
        "id": "B5",
        "from": "C7",
        "to": "C8",
        "role": {
          "en": "Link beam y=8.2 across the hall",
          "es": "Viga de enlace y=8,2 sobre el pasillo"
        }
      },
      {
        "id": "B6",
        "from": "C8",
        "to": "C9",
        "role": {
          "en": "Primary floor beam + strut of braced bay C8–C9 (y≈8.1); carries ático post C15",
          "es": "Viga principal + montante del arriostramiento C8–C9 (y≈8,1); recibe C15"
        }
      },
      {
        "id": "B7",
        "from": "C10",
        "to": "C11",
        "role": {
          "en": "Primary beam at core front y=11.4",
          "es": "Viga principal en frente del núcleo y=11,4"
        }
      },
      {
        "id": "B8",
        "from": "C12",
        "to": "C13",
        "role": {
          "en": "Back beam y=15.05 + strut of back bracing",
          "es": "Viga trasera y=15,05 + montante del arriostramiento trasero"
        }
      },
      {
        "id": "B9",
        "from": "C1",
        "to": "C4",
        "role": {
          "en": "Party-wall edge beam / tie",
          "es": "Viga de borde de medianera / atado"
        }
      },
      {
        "id": "B10",
        "from": "C4",
        "to": "C7",
        "role": {
          "en": "Party-wall edge beam + bracing strut",
          "es": "Viga de borde de medianera + montante de arriostramiento"
        }
      },
      {
        "id": "B11",
        "from": "C7",
        "to": "C10",
        "role": {
          "en": "Party-wall edge beam + bracing strut",
          "es": "Viga de borde de medianera + montante de arriostramiento"
        }
      },
      {
        "id": "B12",
        "from": "C10",
        "to": "C12",
        "role": {
          "en": "Party-wall edge beam at core (receives trimmer)",
          "es": "Viga de borde de medianera en el núcleo (recibe brochal)"
        }
      },
      {
        "id": "B13",
        "from": "C3",
        "to": "C6",
        "role": {
          "en": "Carrasqueta facade edge beam",
          "es": "Viga de borde de fachada Carrasqueta"
        }
      },
      {
        "id": "B14",
        "from": "C6",
        "to": "C9",
        "role": {
          "en": "Carrasqueta facade edge beam",
          "es": "Viga de borde de fachada Carrasqueta"
        }
      },
      {
        "id": "B15",
        "from": "C9",
        "to": "C11",
        "role": {
          "en": "Carrasqueta facade edge beam",
          "es": "Viga de borde de fachada Carrasqueta"
        }
      },
      {
        "id": "B16",
        "from": "C11",
        "to": "C13",
        "role": {
          "en": "Carrasqueta facade edge beam (also ático edge)",
          "es": "Viga de borde de fachada Carrasqueta (también borde del ático)"
        }
      },
      {
        "id": "B17",
        "from": "C5",
        "to": "C14",
        "role": {
          "en": "Ático roof beam y=4.3",
          "es": "Viga de cubierta del ático y=4,3"
        }
      },
      {
        "id": "B18",
        "from": "C8",
        "to": "C15",
        "role": {
          "en": "Ático roof beam y≈8.1 + strut",
          "es": "Viga de cubierta del ático y≈8,1 + montante"
        }
      },
      {
        "id": "B19",
        "from": "C14",
        "to": "C15",
        "role": {
          "en": "Ático side edge beam x=4.4",
          "es": "Viga de borde lateral del ático x=4,4"
        }
      },
      {
        "id": "B20",
        "from": "C15",
        "to": "C11",
        "role": {
          "en": "Ático side edge beam",
          "es": "Viga de borde lateral del ático"
        }
      }
    ],
    "bracing": [
      {
        "from": "C4",
        "to": "C7",
        "plane": {
          "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227)",
          "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227)"
        }
      },
      {
        "from": "C7",
        "to": "C10",
        "plane": {
          "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227)",
          "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227)"
        }
      },
      {
        "from": "C5",
        "to": "C6",
        "plane": {
          "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático)",
          "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático)"
        }
      },
      {
        "from": "C8",
        "to": "C9",
        "plane": {
          "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level)",
          "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas)"
        }
      },
      {
        "from": "C8",
        "to": "C15",
        "plane": {
          "en": "Ático storey only: cross-wall plane y≈8.1 (C8–C15)",
          "es": "Sólo planta ático: plano y≈8,1 (C8–C15)"
        }
      },
      {
        "from": "C12",
        "to": "C13",
        "plane": {
          "en": "Back boundary plane y=15.05 (blind, neighbour at the rear)",
          "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior)"
        }
      }
    ],
    "slab_span_note": {
      "en": "Composite steel-deck slab (60 mm trapezoidal deck + concrete, 13 cm on every floor) spanning in y (front-to-back), continuous over the x-direction beams at y = 0.60, 4.30, 8.20, 11.40 and 15.05 m, so spans are 3.70 / 3.90 / 3.20 / 3.65 m. All primary beams then run across the plot, parallel to the street front, and sit inside the apartment cross walls (y = 4.3, 8.2, 11.4), so ceilings stay flat. The deck is propped at mid-span while concreting (spans > 3.0 m). In the core, trimmers frame the openings: T1 along x = 2.15 (B7 to B8) and TR along y = 12.78 between the lift and the stair (B12 to T1). Lift and stair openings are deducted from the slab area. C14 and C15 are short ático posts standing on beams B4 and B6. Lateral stability: X-bracing in four blind planes (party wall C4–C7–C10; cross walls y=4.3 C5–C6 and y≈8.1 C8–C9; back boundary C12–C13), with the slabs as rigid diaphragms.",
      "es": "Forjado de chapa colaborante (chapa grecada de 60 mm + hormigón, canto 13 cm en todas las plantas) que trabaja en dirección y (de fachada a fondo), continuo sobre las vigas en dirección x situadas en y = 0,60; 4,30; 8,20; 11,40 y 15,05 m, con luces de 3,70 / 3,90 / 3,20 / 3,65 m. Así todas las vigas principales cruzan la parcela en paralelo a la fachada principal y quedan ocultas en los tabiques transversales de las viviendas (y = 4,3; 8,2; 11,4), con techos planos. Apuntalamiento en el centro de vano durante el hormigonado (luces > 3,0 m). En el núcleo, los huecos se resuelven con brochales: T1 en x = 2,15 (de B7 a B8) y TR en y = 12,78, entre ascensor y escalera (de B12 a T1). Los huecos de ascensor y escalera se descuentan del forjado. C14 y C15 son pilarillos del ático apoyados en las vigas B4 y B6. Estabilidad horizontal: cruces de San Andrés en cuatro planos ciegos (medianera C4–C7–C10; tabiques transversales y=4,3 C5–C6 e y≈8,1 C8–C9; lindero trasero C12–C13), con los forjados como diafragmas rígidos."
    }
  },
  "options": {
    "A": {
      "label": {
        "en": "Option A — PB + 3 floors + ático (cornice 13.0 m)",
        "es": "Opción A — PB + 3 plantas + ático (cornisa 13,0 m)"
      },
      "levels": [
        {
          "name": "PB",
          "h": 4.0
        },
        {
          "name": "P1",
          "h": 3.0
        },
        {
          "name": "P2",
          "h": 3.0
        },
        {
          "name": "P3",
          "h": 3.0
        },
        {
          "name": "Ático",
          "h": 3.0
        }
      ],
      "cornice_m": 13.0,
      "top_m": 16.0,
      "homes": 5,
      "built_m2": 390.4,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (lift + stair openings)",
            "es": "Brochales del núcleo (huecos de ascensor y escalera)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "16 pieces over all levels, total length 40.5 m",
            "es": "16 piezas en todas las plantas, longitud total 40.5 m"
          },
          "count": 16,
          "length_m": 40.45,
          "kg_per_m": 15.8,
          "kg": 639.1
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "9 pieces over all levels, total length 35.1 m",
            "es": "9 piezas en todas las plantas, longitud total 35.1 m"
          },
          "count": 9,
          "length_m": 35.09,
          "kg_per_m": 22.4,
          "kg": 786.0
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "14 pieces over all levels, total length 36.1 m",
            "es": "14 piezas en todas las plantas, longitud total 36.1 m"
          },
          "count": 14,
          "length_m": 36.07,
          "kg_per_m": 15.8,
          "kg": 569.9
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 240",
          "where": {
            "en": "2 pieces over all levels, total length 8.1 m",
            "es": "2 piezas en todas las plantas, longitud total 8.1 m"
          },
          "count": 2,
          "length_m": 8.05,
          "kg_per_m": 30.7,
          "kg": 247.1
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "2 pieces over all levels, total length 7.2 m",
            "es": "2 piezas en todas las plantas, longitud total 7.2 m"
          },
          "count": 2,
          "length_m": 7.21,
          "kg_per_m": 18.8,
          "kg": 135.5
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 4.0 m",
            "es": "1 piezas en todas las plantas, longitud total 4.0 m"
          },
          "count": 1,
          "length_m": 4.03,
          "kg_per_m": 26.2,
          "kg": 105.6
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "8 pieces over all levels, total length 23.7 m",
            "es": "8 piezas en todas las plantas, longitud total 23.7 m"
          },
          "count": 8,
          "length_m": 23.73,
          "kg_per_m": 22.4,
          "kg": 531.6
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "12 pieces over all levels, total length 24.1 m",
            "es": "12 piezas en todas las plantas, longitud total 24.1 m"
          },
          "count": 12,
          "length_m": 24.08,
          "kg_per_m": 15.8,
          "kg": 380.5
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "3 pieces over all levels, total length 8.3 m",
            "es": "3 piezas en todas las plantas, longitud total 8.3 m"
          },
          "count": 3,
          "length_m": 8.34,
          "kg_per_m": 18.8,
          "kg": 156.8
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 2.9 m",
            "es": "1 piezas en todas las plantas, longitud total 2.9 m"
          },
          "count": 1,
          "length_m": 2.85,
          "kg_per_m": 26.2,
          "kg": 74.7
        },
        {
          "group": {
            "en": "Party-wall edge beams / bracing struts",
            "es": "Vigas de borde de medianera / montantes de arriostramiento"
          },
          "profile": "IPE 200",
          "where": {
            "en": "12 pieces over all levels, total length 43.8 m",
            "es": "12 piezas en todas las plantas, longitud total 43.8 m"
          },
          "count": 12,
          "length_m": 43.8,
          "kg_per_m": 22.4,
          "kg": 981.1
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 160",
          "where": {
            "en": "16 pieces over all levels, total length 41.6 m",
            "es": "16 piezas en todas las plantas, longitud total 41.6 m"
          },
          "count": 16,
          "length_m": 41.63,
          "kg_per_m": 15.8,
          "kg": 657.8
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 120x120x6",
          "where": {
            "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing) — 10 diagonals, total 38.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera) — 10 diagonales, total 38.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 10,
          "length_m": 38.61,
          "kg_per_m": 23.1,
          "kg": 891.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø30 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 4 diagonals, total 22.0 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 4 diagonales, total 22.0 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 22.0,
          "kg_per_m": 6.11,
          "kg": 134.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 4 diagonals, total 19.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 4 diagonales, total 19.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 19.29,
          "kg_per_m": 3.91,
          "kg": 75.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 8 diagonals, total 38.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 8 diagonales, total 38.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 8,
          "length_m": 38.58,
          "kg_per_m": 1.74,
          "kg": 67.1
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 4 diagonals, total 19.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 4 diagonales, total 19.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 19.29,
          "kg_per_m": 2.72,
          "kg": 52.5
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 90x90x5",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 9.8 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 9.8 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.82,
          "kg_per_m": 14.41,
          "kg": 141.5
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.28,
          "kg_per_m": 10.14,
          "kg": 84.0
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.28,
          "kg_per_m": 8.79,
          "kg": 72.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.28,
          "kg_per_m": 4.94,
          "kg": 40.9
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 9.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 9.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.74,
          "kg_per_m": 10.14,
          "kg": 98.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 8.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 8.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.18,
          "kg_per_m": 8.79,
          "kg": 71.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 8.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 8.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.18,
          "kg_per_m": 4.94,
          "kg": 40.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 8.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 8.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.18,
          "kg_per_m": 3.91,
          "kg": 32.0
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 7.5 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 7.5 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.52,
          "kg_per_m": 2.72,
          "kg": 20.5
        },
        {
          "group": {
            "en": "Columns P2–P3",
            "es": "Pilares P2–P3"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C16, C17, C18 — 14 pieces, total length 84.0 m",
            "es": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C16, C17, C18 — 14 piezas, longitud total 84.0 m"
          },
          "count": 14,
          "length_m": 84.0,
          "kg_per_m": 33.7,
          "kg": 2830.8
        },
        {
          "group": {
            "en": "Columns P2–P3",
            "es": "Pilares P2–P3"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C12, C13 — 2 pieces, total length 12.0 m",
            "es": "C12, C13 — 2 piezas, longitud total 12.0 m"
          },
          "count": 2,
          "length_m": 12.0,
          "kg_per_m": 51.2,
          "kg": 614.4
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C3, C7, C11, C16, C17, C18 — 7 pieces, total length 49.0 m",
            "es": "C1, C3, C7, C11, C16, C17, C18 — 7 piezas, longitud total 49.0 m"
          },
          "count": 7,
          "length_m": 49.0,
          "kg_per_m": 33.7,
          "kg": 1651.3
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 220",
          "where": {
            "en": "C5, C6 — 2 pieces, total length 14.0 m",
            "es": "C5, C6 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 71.5,
          "kg": 1001.0
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 160",
          "where": {
            "en": "C2, C4, C10 — 3 pieces, total length 21.0 m",
            "es": "C2, C4, C10 — 3 piezas, longitud total 21.0 m"
          },
          "count": 3,
          "length_m": 21.0,
          "kg_per_m": 42.6,
          "kg": 894.6
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 200",
          "where": {
            "en": "C12, C13 — 2 pieces, total length 14.0 m",
            "es": "C12, C13 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 61.3,
          "kg": 858.2
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C8, C9 — 2 pieces, total length 14.0 m",
            "es": "C8, C9 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 51.2,
          "kg": 716.8
        },
        {
          "group": {
            "en": "Columns Ático",
            "es": "Pilares Ático"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C4, C5, C7, C8, C10, C11, C16, C17, C18 — 9 pieces, total length 27.0 m",
            "es": "C4, C5, C7, C8, C10, C11, C16, C17, C18 — 9 piezas, longitud total 27.0 m"
          },
          "count": 9,
          "length_m": 27.0,
          "kg_per_m": 33.7,
          "kg": 909.9
        },
        {
          "group": {
            "en": "Columns Ático",
            "es": "Pilares Ático"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C12, C13 — 2 pieces, total length 6.0 m",
            "es": "C12, C13 — 2 piezas, longitud total 6.0 m"
          },
          "count": 2,
          "length_m": 6.0,
          "kg_per_m": 51.2,
          "kg": 307.2
        },
        {
          "group": {
            "en": "Columns Ático",
            "es": "Pilares Ático"
          },
          "profile": "HEB 120",
          "where": {
            "en": "C14, C15 — 2 pieces, total length 6.0 m",
            "es": "C14, C15 — 2 piezas, longitud total 6.0 m"
          },
          "count": 2,
          "length_m": 6.0,
          "kg_per_m": 26.7,
          "kg": 160.2
        },
        {
          "group": {
            "en": "Stair stringers (estimate, steps excluded)",
            "es": "Zancas de escalera (estimación, peldaños no incluidos)"
          },
          "profile": "UPN 180",
          "where": {
            "en": "16 stringers, total 50.3 m",
            "es": "16 zancas, longitud total 50.3 m"
          },
          "count": 16,
          "length_m": 50.27,
          "kg_per_m": 22.0,
          "kg": 1105.9
        },
        {
          "group": {
            "en": "Connections, plates, stiffeners, bolts (+12 %)",
            "es": "Uniones, chapas, rigidizadores y tornillería (+12 %)"
          },
          "profile": "plates/bolts",
          "where": {
            "en": "Allowance on all members above",
            "es": "Repercusión sobre todos los elementos anteriores"
          },
          "count": 1,
          "length_m": 0.0,
          "kg_per_m": 0.0,
          "kg": 2176.8
        }
      ],
      "slab": {
        "type": {
          "en": "Composite steel-deck slab (forjado de chapa colaborante), 60 mm trapezoidal deck 0.8–1.0 mm, HA-25, mesh; 13 cm on every floor; propped at mid-span when concreting",
          "es": "Forjado de chapa colaborante, chapa grecada de 60 mm y 0,8–1,0 mm, HA-25, mallazo; canto 13 cm en todas las plantas; apuntalado en centro de vano durante el hormigonado"
        },
        "thickness_cm": 13,
        "area_m2": 330.0
      },
      "column_loads": [
        {
          "id": "C1",
          "N_sls_kN": 152,
          "N_uls_kN": 210
        },
        {
          "id": "C2",
          "N_sls_kN": 287,
          "N_uls_kN": 397
        },
        {
          "id": "C3",
          "N_sls_kN": 262,
          "N_uls_kN": 360
        },
        {
          "id": "C4",
          "N_sls_kN": 338,
          "N_uls_kN": 520
        },
        {
          "id": "C5",
          "N_sls_kN": 792,
          "N_uls_kN": 1216
        },
        {
          "id": "C6",
          "N_sls_kN": 725,
          "N_uls_kN": 1123
        },
        {
          "id": "C7",
          "N_sls_kN": 158,
          "N_uls_kN": 220
        },
        {
          "id": "C8",
          "N_sls_kN": 502,
          "N_uls_kN": 754
        },
        {
          "id": "C9",
          "N_sls_kN": 480,
          "N_uls_kN": 722
        },
        {
          "id": "C10",
          "N_sls_kN": 272,
          "N_uls_kN": 431
        },
        {
          "id": "C11",
          "N_sls_kN": 144,
          "N_uls_kN": 199
        },
        {
          "id": "C12",
          "N_sls_kN": 540,
          "N_uls_kN": 854
        },
        {
          "id": "C13",
          "N_sls_kN": 607,
          "N_uls_kN": 946
        },
        {
          "id": "C16",
          "N_sls_kN": 123,
          "N_uls_kN": 170
        },
        {
          "id": "C17",
          "N_sls_kN": 64,
          "N_uls_kN": 90
        },
        {
          "id": "C18",
          "N_sls_kN": 165,
          "N_uls_kN": 231
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×3; C7 ×2; C8 ×3; C9 ×2; C10 ×2; C11 ×2; C12 ×3; C13 ×3; C16 ×2; C17 ×2; C18 ×2 → 38 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C8, C9, C10, C12, C13 up to 340 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×3; C7 ×2; C8 ×3; C9 ×2; C10 ×2; C11 ×2; C12 ×3; C13 ×3; C16 ×2; C17 ×2; C18 ×2 → 38 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C8, C9, C10, C12, C13 hasta 340 kN — la absorben los micropilotes a tracción."
          }
        },
        {
          "type": {
            "en": "Alternative: shallow footings at 150 kPa (only if the geotechnical study allows)",
            "es": "Alternativa: zapatas a 150 kPa (sólo si el estudio geotécnico lo permite)"
          },
          "detail": {
            "en": "Required plan sizes: C1 1.10×1.10 m (corner); C2 1.20×1.80 m (eccentric); C3 1.40×1.40 m (corner); C4 1.30×1.95 m (eccentric); C5 2.45×2.45 m (centred); C6 1.90×2.85 m (eccentric); C7 0.90×1.35 m (eccentric); C8 1.95×1.95 m (centred); C9 1.55×2.35 m (eccentric); C10 1.20×1.80 m (eccentric); C11 0.85×1.30 m (eccentric); C12 2.00×2.00 m (corner); C13 2.15×2.15 m (corner); C16 0.80×1.25 m (eccentric); C17 0.70×0.70 m (centred); C18 1.15×1.15 m (centred). Only C5, C8, C17 and C18 can be centred footings. All perimeter columns sit 0.30 m from the party wall or 0.6 m from the retained facades, so they need eccentric party-wall / corner footings (zapatas de medianería / esquina) with strap beams (vigas centradoras). C7 and C8 are only about 1.8 m apart and C8's footing is large, so they need a combined footing. The bracing columns (C5, C6, C8, C9, C10, C12, C13) have net uplift under wind, so footings there would need heavy ballast or combined footings. Risks: settlement in soft clay next to old facade footings, and digging beside the neighbour's foundation (possible underpinning).",
            "es": "Dimensiones necesarias en planta: C1 1,10×1,10 m (de esquina); C2 1,20×1,80 m (medianera/fachada); C3 1,40×1,40 m (de esquina); C4 1,30×1,95 m (medianera/fachada); C5 2,45×2,45 m (centrada); C6 1,90×2,85 m (medianera/fachada); C7 0,90×1,35 m (medianera/fachada); C8 1,95×1,95 m (centrada); C9 1,55×2,35 m (medianera/fachada); C10 1,20×1,80 m (medianera/fachada); C11 0,85×1,30 m (medianera/fachada); C12 2,00×2,00 m (de esquina); C13 2,15×2,15 m (de esquina); C16 0,80×1,25 m (medianera/fachada); C17 0,70×0,70 m (centrada); C18 1,15×1,15 m (centrada). Sólo C5, C8, C17 y C18 admiten zapata centrada. Todos los pilares perimetrales están a 0,30 m de la medianera o a 0,6 m de las fachadas conservadas, por lo que necesitan zapatas de medianería / esquina con vigas centradoras. C7 y C8 están a sólo ~1,8 m y la zapata de C8 es grande: zapata combinada. Los pilares de arriostramiento (C5, C6, C8, C9, C10, C12, C13) tienen tracción neta con viento, por lo que sus zapatas necesitarían mucho lastre o ser combinadas. Riesgos: asientos en arcillas blandas junto a la cimentación de las fachadas antiguas y excavación junto a la cimentación del colindante (posible recalce)."
          }
        },
        {
          "type": {
            "en": "Geotechnical study required",
            "es": "Estudio geotécnico obligatorio"
          },
          "detail": {
            "en": "CTE DB-SE-C requires an estudio geotécnico, typically 2–3 boreholes or penetrometer tests to ≥ 15–20 m, plus water table level and soil aggressiveness. It sets the allowable pressure, micropile length and capacity (pile load test recommended), and the slab-on-grade design.",
            "es": "El CTE DB-SE-C exige estudio geotécnico, normalmente 2–3 sondeos o penetrómetros hasta ≥ 15–20 m, con nivel freático y agresividad del terreno. Fija la tensión admisible, la longitud y capacidad de los micropilotes (se recomienda prueba de carga) y la solera."
          }
        }
      ],
      "fire": {
        "en": "Evacuation height = ático floor level = 13.0 m (≤ 14 m → unprotected stair allowed, DB-SI SI3 Table 5.1; ≤ 15 m → residential structure R60, SI6 Table 3.1). The whole building is Residencial Vivienda (PB is a flat too), so there is no other-use fire sector and the structure is R60 throughout, including the PB columns and the P1 floor. 13 cm slabs give h_eff ≈ 92 mm ≥ 80 mm (R60, EN 1994-1-2). Steel protected with intumescent paint (R60).",
        "es": "Altura de evacuación = cota del suelo del ático = 13,0 m (≤ 14 m → se admite escalera no protegida, DB-SI SI3 Tabla 5.1; ≤ 15 m → estructura residencial R60, SI6 Tabla 3.1). Todo el edificio es Residencial Vivienda (la PB también es vivienda), por lo que no hay sector de otro uso y la estructura es R60 en su totalidad, incluidos los pilares de PB y el forjado de P1. Forjados de 13 cm: h_eff ≈ 92 mm ≥ 80 mm (R60, UNE-EN 1994-1-2). Acero protegido con pintura intumescente (R60)."
      },
      "totals": {
        "steel_kg": 20316.9,
        "steel_kg_m2": 52.0,
        "cost_eur_low": 147400.0,
        "cost_eur_high": 226200.0,
        "cost_per_home_low": 29500.0,
        "cost_per_home_high": 45200.0
      },
      "checks": [
        {
          "item": {
            "en": "Composite slab: max span / depth",
            "es": "Forjado colaborante: luz máxima / canto"
          },
          "value": "3.90 m / 0.13 m = 30 ≤ 32 (EC4 guidance); propped at mid-span when concreting",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: max utilisation (bending + strut axial / shear / deflection)",
            "es": "Vigas: aprovechamiento máximo (flexión + axil de montante / cortante / flecha)"
          },
          "value": "0.97 — B1 IPE 180 at Ático + terraza (cota cornisa)",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: active deflection (worst ratio to limit)",
            "es": "Vigas: flecha activa (peor relación con el límite)"
          },
          "value": "6.0 mm vs 6.2 mm — B1 IPE 180",
          "ok": true
        },
        {
          "item": {
            "en": "Columns: max N_Ed / Nb,Rd (weak axis, Lcr = storey height)",
            "es": "Pilares: N_Ed / Nb,Rd máximo (eje débil, Lcr = altura de planta)"
          },
          "value": "0.82 ≤ 0.85 — C8 HEB 180, storey PB",
          "ok": true
        },
        {
          "item": {
            "en": "Bracing diagonals: max utilisation (rods tension-only, SHS tension + compression)",
            "es": "Diagonales de arriostramiento: aprovechamiento máximo (redondos sólo tracción, tubos tracción y compresión)"
          },
          "value": "0.92",
          "ok": true
        },
        {
          "item": {
            "en": "Lateral drift under characteristic wind",
            "es": "Desplome con viento característico"
          },
          "value": "top 24.6 mm ≤ H/500 = 32.0 mm; worst storey 65 % of h/250",
          "ok": true
        },
        {
          "item": {
            "en": "Seismic NCSE-02",
            "es": "Sismo NCSE-02"
          },
          "value": "not mandatory (ab 0.06g < 0.08g, normal importance, braced both ways, < 7 storeys); indicative Vs ≈ 331 kN vs ULS wind x 346 kN / y 155 kN — if applied voluntarily it would govern the party-wall (y) bracing",
          "ok": true
        },
        {
          "item": {
            "en": "Uplift at bracing columns (characteristic)",
            "es": "Tracción en pilares de arriostramiento (característica)"
          },
          "value": "max 340 kN → micropiles in tension",
          "ok": true
        },
        {
          "item": {
            "en": "Headroom: 3.0 m floor-to-floor",
            "es": "Altura libre: 3,0 m entre forjados"
          },
          "value": "3.00 − 0.13 slab − 0.07 finishes = 2.80 m clear; beams ≤ 300 mm sit in cross walls",
          "ok": true
        },
        {
          "item": {
            "en": "Fire resistance",
            "es": "Resistencia al fuego"
          },
          "value": "R60 throughout, residential only (h_evac 13.0 m ≤ 15 m); no other-use sector",
          "ok": true
        },
        {
          "item": {
            "en": "Clearance of columns and beams to the stair opening and lift shaft (≥ 0.10 m)",
            "es": "Holgura de pilares y vigas al hueco de escalera y de ascensor (≥ 0,10 m)"
          },
          "value": "min 0.10 m (C12 HEB 200)",
          "ok": true
        }
      ],
      "core": {
        "stair": [
          0.15,
          2.2,
          11.76,
          15.0
        ],
        "stair_run_end": 14.0,
        "lift": [
          2.3,
          3.8,
          10.2,
          11.8
        ],
        "core_y": 10.15
      },
      "grid": {
        "columns": [
          {
            "id": "C1",
            "x": 0.3,
            "y": 0.6
          },
          {
            "id": "C2",
            "x": 3.385,
            "y": 0.6
          },
          {
            "id": "C3",
            "x": 7.41,
            "y": 0.6
          },
          {
            "id": "C4",
            "x": 0.3,
            "y": 4.0
          },
          {
            "id": "C5",
            "x": 3.4,
            "y": 4.0
          },
          {
            "id": "C6",
            "x": 6.25,
            "y": 4.0
          },
          {
            "id": "C7",
            "x": 0.3,
            "y": 7.9
          },
          {
            "id": "C8",
            "x": 2.13,
            "y": 7.9
          },
          {
            "id": "C9",
            "x": 4.91,
            "y": 7.9
          },
          {
            "id": "C10",
            "x": 0.3,
            "y": 11.55
          },
          {
            "id": "C11",
            "x": 4.17,
            "y": 10.05
          },
          {
            "id": "C12",
            "x": 0.3,
            "y": 15.2
          },
          {
            "id": "C13",
            "x": 2.45,
            "y": 15.2
          },
          {
            "id": "C16",
            "x": 4.15,
            "y": 11.4
          },
          {
            "id": "C17",
            "x": 2.45,
            "y": 12.0
          },
          {
            "id": "C18",
            "x": 2.13,
            "y": 11.55
          },
          {
            "id": "C14",
            "x": 4.4,
            "y": 4.0
          },
          {
            "id": "C15",
            "x": 4.4,
            "y": 7.9
          }
        ],
        "beams": [
          {
            "id": "B1",
            "from": "C1",
            "to": "C2",
            "role": {
              "en": "Burjassot facade beam, bay 1 (behind retained facade)",
              "es": "Viga de fachada Burjassot, vano 1 (tras la fachada conservada)"
            }
          },
          {
            "id": "B2",
            "from": "C2",
            "to": "C3",
            "role": {
              "en": "Burjassot facade beam, bay 2",
              "es": "Viga de fachada Burjassot, vano 2"
            }
          },
          {
            "id": "B3",
            "from": "C4",
            "to": "C5",
            "role": {
              "en": "Primary floor beam in cross wall y=4.0",
              "es": "Viga principal en tabique y=4,0"
            }
          },
          {
            "id": "B4",
            "from": "C5",
            "to": "C6",
            "role": {
              "en": "Primary floor beam y=4.0 + strut of braced bay C5–C6; carries ático post C14",
              "es": "Viga principal y=4,0 + montante del arriostramiento C5–C6; recibe el pilarillo C14 del ático"
            }
          },
          {
            "id": "B5",
            "from": "C7",
            "to": "C8",
            "role": {
              "en": "Floor beam y=7.9 across the hall",
              "es": "Viga y=7,9 sobre el pasillo"
            }
          },
          {
            "id": "B6",
            "from": "C8",
            "to": "C9",
            "role": {
              "en": "Primary floor beam y=7.9 + strut of braced bay C8–C9; carries ático post C15",
              "es": "Viga principal y=7,9 + montante del arriostramiento C8–C9; recibe C15"
            }
          },
          {
            "id": "B8",
            "from": "C12",
            "to": "C13",
            "role": {
              "en": "Back beam y=15.20 + strut of back bracing (behind the stair half-landing)",
              "es": "Viga trasera y=15,20 + montante del arriostramiento trasero (detrás de la meseta)"
            }
          },
          {
            "id": "B9",
            "from": "C1",
            "to": "C4",
            "role": {
              "en": "Party-wall edge beam / tie",
              "es": "Viga de borde de medianera / atado"
            }
          },
          {
            "id": "B10",
            "from": "C4",
            "to": "C7",
            "role": {
              "en": "Party-wall edge beam + bracing strut",
              "es": "Viga de borde de medianera + montante de arriostramiento"
            }
          },
          {
            "id": "B11",
            "from": "C7",
            "to": "C10",
            "role": {
              "en": "Party-wall edge beam + bracing strut (no beam beyond C10: stair)",
              "es": "Viga de borde de medianera + montante (sin viga más allá de C10: escalera)"
            }
          },
          {
            "id": "B13",
            "from": "C3",
            "to": "C6",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B14",
            "from": "C6",
            "to": "C9",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B15",
            "from": "C9",
            "to": "C11",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B16A",
            "from": "C11",
            "to": "C16",
            "role": {
              "en": "Facade edge beam beside the lift (new facade)",
              "es": "Viga de borde de fachada junto al ascensor (fachada nueva)"
            }
          },
          {
            "id": "B16",
            "from": "C16",
            "to": "C13",
            "role": {
              "en": "Facade edge beam, back part (new facade); receives T3",
              "es": "Viga de borde de fachada, parte trasera (fachada nueva); recibe T3"
            }
          },
          {
            "id": "TR",
            "from": "C10",
            "to": "C18",
            "role": {
              "en": "Landing edge beam y=11.55, 0.21 m before the stair opening (carries the flights)",
              "es": "Viga de borde del rellano y=11,55, a 0,21 m del hueco de escalera (recibe los tramos)"
            }
          },
          {
            "id": "T4",
            "from": "C8",
            "to": "C18",
            "role": {
              "en": "Trimmer x=2.13 along the west side of the lift (receives B7)",
              "es": "Brochal x=2,13 junto al lado oeste del ascensor (recibe B7)"
            }
          },
          {
            "id": "T1",
            "from": "C17",
            "to": "C13",
            "role": {
              "en": "Trimmer x=2.45 along the east side of the stair",
              "es": "Brochal x=2,45 junto al lado este de la escalera"
            }
          },
          {
            "id": "B17",
            "from": "C5",
            "to": "C14",
            "role": {
              "en": "Ático roof beam y=4.0",
              "es": "Viga de cubierta del ático y=4,0"
            }
          },
          {
            "id": "B18",
            "from": "C8",
            "to": "C15",
            "role": {
              "en": "Ático roof beam y=7.9 + strut",
              "es": "Viga de cubierta del ático y=7,9 + montante"
            }
          },
          {
            "id": "B19",
            "from": "C14",
            "to": "C15",
            "role": {
              "en": "Ático side edge beam x=4.4",
              "es": "Viga de borde lateral del ático x=4,4"
            }
          },
          {
            "id": "B20",
            "from": "C15",
            "to": "C11",
            "role": {
              "en": "Ático side edge beam",
              "es": "Viga de borde lateral del ático"
            }
          }
        ],
        "bracing": [
          {
            "from": "C4",
            "to": "C7",
            "plane": {
              "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227)",
              "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227)"
            }
          },
          {
            "from": "C7",
            "to": "C10",
            "plane": {
              "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227)",
              "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227)"
            }
          },
          {
            "from": "C5",
            "to": "C6",
            "plane": {
              "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático)",
              "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático)"
            }
          },
          {
            "from": "C8",
            "to": "C9",
            "plane": {
              "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15",
              "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15"
            }
          },
          {
            "from": "C8",
            "to": "C15",
            "plane": {
              "en": "Ático storey only: plane y=7.9 (C8–C15); needs a solid wall at y=7.9 in the studio",
              "es": "Sólo planta ático: plano y=7,9 (C8–C15); requiere un muro ciego en y=7,9 en el estudio"
            }
          },
          {
            "from": "C12",
            "to": "C13",
            "plane": {
              "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing)",
              "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera)"
            }
          }
        ],
        "slab_span_note": {
          "en": "Redesigned with-lift core (options A and B). The composite slab (13 cm) spans in y over the beam rows at y = 0.60 / 4.00 / 7.90 and the core beams, so the spans are 3.40 / 3.90 / 3.65 m (landing, 7.90→11.55). The core is framed around the two openings without crossing them:\n- TR (C10–C18, y = 11.55) is the landing edge in front of the stair.\n- T4 (C8–C18, x = 2.13) runs along the west side of the lift.\n- B7 (y = 10.05, from T4 to C11) runs along the south side of the lift.\n- T3 (y = 12.00, from C17 to the facade beam B16) runs along the north side of the lift.\n- T1 (C17–C13, x = 2.45) runs along the east side of the stair.\n- B8 (C12–C13, y = 15.20) is behind the half-landing.\nColumns and beams keep at least 0.10 m from the stair opening (x 0.15–2.20, y 11.76–15.00) and the lift shaft (x 2.30–3.80, y 10.20–11.80). B7 and T3 rest on other beams, so they are not listed between columns; frame.json gives their coordinates. C14 and C15 are ático posts standing on B4 and B6. Lateral stability comes from X-bracing in four blind planes: the party wall (C4–C7–C10), the cross walls y = 4.0 (C5–C6) and y = 7.9 (C8–C9), and the back boundary (C12–C13).",
          "es": "Núcleo rediseñado con ascensor (opciones A y B). El forjado colaborante (13 cm) trabaja en dirección y sobre las alineaciones de vigas y = 0,60 / 4,00 / 7,90 y las vigas del núcleo, con luces de 3,40 / 3,90 / 3,65 m (rellano, 7,90→11,55). El núcleo se enmarca alrededor de los dos huecos sin cruzarlos:\n- TR (C10–C18, y = 11,55) es el borde del rellano delante de la escalera.\n- T4 (C8–C18, x = 2,13) va junto al lado oeste del ascensor.\n- B7 (y = 10,05, de T4 a C11) va junto al lado sur del ascensor.\n- T3 (y = 12,00, de C17 a la viga de fachada B16) va junto al lado norte del ascensor.\n- T1 (C17–C13, x = 2,45) va junto al lado este de la escalera.\n- B8 (C12–C13, y = 15,20) queda detrás de la meseta.\nPilares y vigas quedan a ≥ 0,10 m del hueco de escalera (x 0,15–2,20, y 11,76–15,00) y del hueco del ascensor (x 2,30–3,80, y 10,20–11,80). B7 y T3 apoyan en otras vigas, por eso no figuran entre pilares; sus coordenadas están en frame.json. C14 y C15 son pilarillos del ático sobre B4 y B6. La estabilidad horizontal la dan cruces de San Andrés en cuatro planos ciegos: medianera (C4–C7–C10), tabiques y = 4,0 (C5–C6) e y = 7,9 (C8–C9) y lindero trasero (C12–C13)."
        }
      }
    },
    "B": {
      "label": {
        "en": "Option B — PB + 2 floors + ático (cornice 10.0 m)",
        "es": "Opción B — PB + 2 plantas + ático (cornisa 10,0 m)"
      },
      "levels": [
        {
          "name": "PB",
          "h": 4.0
        },
        {
          "name": "P1",
          "h": 3.0
        },
        {
          "name": "P2",
          "h": 3.0
        },
        {
          "name": "Ático",
          "h": 3.0
        }
      ],
      "cornice_m": 10.0,
      "top_m": 13.0,
      "homes": 4,
      "built_m2": 305.1,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (lift + stair openings)",
            "es": "Brochales del núcleo (huecos de ascensor y escalera)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "12 pieces over all levels, total length 30.3 m",
            "es": "12 piezas en todas las plantas, longitud total 30.3 m"
          },
          "count": 12,
          "length_m": 30.33,
          "kg_per_m": 15.8,
          "kg": 479.2
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "6 pieces over all levels, total length 23.7 m",
            "es": "6 piezas en todas las plantas, longitud total 23.7 m"
          },
          "count": 6,
          "length_m": 23.72,
          "kg_per_m": 22.4,
          "kg": 531.3
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "11 pieces over all levels, total length 28.9 m",
            "es": "11 piezas en todas las plantas, longitud total 28.9 m"
          },
          "count": 11,
          "length_m": 28.86,
          "kg_per_m": 15.8,
          "kg": 456.0
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "2 pieces over all levels, total length 7.2 m",
            "es": "2 piezas en todas las plantas, longitud total 7.2 m"
          },
          "count": 2,
          "length_m": 7.21,
          "kg_per_m": 18.8,
          "kg": 135.5
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 240",
          "where": {
            "en": "1 pieces over all levels, total length 4.0 m",
            "es": "1 piezas en todas las plantas, longitud total 4.0 m"
          },
          "count": 1,
          "length_m": 4.03,
          "kg_per_m": 30.7,
          "kg": 123.7
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 4.0 m",
            "es": "1 piezas en todas las plantas, longitud total 4.0 m"
          },
          "count": 1,
          "length_m": 4.03,
          "kg_per_m": 26.2,
          "kg": 105.6
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "6 pieces over all levels, total length 17.8 m",
            "es": "6 piezas en todas las plantas, longitud total 17.8 m"
          },
          "count": 6,
          "length_m": 17.78,
          "kg_per_m": 22.4,
          "kg": 398.3
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "9 pieces over all levels, total length 18.1 m",
            "es": "9 piezas en todas las plantas, longitud total 18.1 m"
          },
          "count": 9,
          "length_m": 18.06,
          "kg_per_m": 15.8,
          "kg": 285.3
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "2 pieces over all levels, total length 5.6 m",
            "es": "2 piezas en todas las plantas, longitud total 5.6 m"
          },
          "count": 2,
          "length_m": 5.56,
          "kg_per_m": 18.8,
          "kg": 104.5
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 2.9 m",
            "es": "1 piezas en todas las plantas, longitud total 2.9 m"
          },
          "count": 1,
          "length_m": 2.85,
          "kg_per_m": 26.2,
          "kg": 74.7
        },
        {
          "group": {
            "en": "Party-wall edge beams / bracing struts",
            "es": "Vigas de borde de medianera / montantes de arriostramiento"
          },
          "profile": "IPE 200",
          "where": {
            "en": "9 pieces over all levels, total length 32.9 m",
            "es": "9 piezas en todas las plantas, longitud total 32.9 m"
          },
          "count": 9,
          "length_m": 32.85,
          "kg_per_m": 22.4,
          "kg": 735.8
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 160",
          "where": {
            "en": "16 pieces over all levels, total length 41.6 m",
            "es": "16 piezas en todas las plantas, longitud total 41.6 m"
          },
          "count": 16,
          "length_m": 41.63,
          "kg_per_m": 15.8,
          "kg": 657.8
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing) — 2 diagonals, total 9.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera) — 2 diagonales, total 9.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.08,
          "kg_per_m": 10.14,
          "kg": 92.1
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø30 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.38,
          "kg_per_m": 6.11,
          "kg": 45.1
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.38,
          "kg_per_m": 3.91,
          "kg": 28.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.38,
          "kg_per_m": 1.74,
          "kg": 12.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 4 diagonals, total 22.0 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 4 diagonales, total 22.0 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 22.0,
          "kg_per_m": 4.94,
          "kg": 108.7
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 8 diagonals, total 38.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 8 diagonales, total 38.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 8,
          "length_m": 38.58,
          "kg_per_m": 1.74,
          "kg": 67.1
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227) — 4 diagonals, total 19.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227) — 4 diagonales, total 19.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 19.29,
          "kg_per_m": 2.72,
          "kg": 52.5
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 9.8 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 9.8 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.82,
          "kg_per_m": 10.14,
          "kg": 99.6
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.28,
          "kg_per_m": 8.79,
          "kg": 72.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.28,
          "kg_per_m": 3.91,
          "kg": 32.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 9.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 9.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.74,
          "kg_per_m": 8.79,
          "kg": 85.6
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 4 diagonals, total 15.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 4 diagonales, total 15.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 15.7,
          "kg_per_m": 2.72,
          "kg": 42.7
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15 — 2 diagonals, total 8.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15 — 2 diagonales, total 8.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.18,
          "kg_per_m": 4.94,
          "kg": 40.4
        },
        {
          "group": {
            "en": "Columns P2–Ático",
            "es": "Pilares P2–Ático"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C16, C17, C18 — 16 pieces, total length 81.0 m",
            "es": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C16, C17, C18 — 16 piezas, longitud total 81.0 m"
          },
          "count": 16,
          "length_m": 81.0,
          "kg_per_m": 33.7,
          "kg": 2729.7
        },
        {
          "group": {
            "en": "Columns P2–Ático",
            "es": "Pilares P2–Ático"
          },
          "profile": "HEB 120",
          "where": {
            "en": "C14, C15 — 2 pieces, total length 6.0 m",
            "es": "C14, C15 — 2 piezas, longitud total 6.0 m"
          },
          "count": 2,
          "length_m": 6.0,
          "kg_per_m": 26.7,
          "kg": 160.2
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C4, C7, C10, C11, C16, C17, C18 — 10 pieces, total length 70.0 m",
            "es": "C1, C2, C3, C4, C7, C10, C11, C16, C17, C18 — 10 piezas, longitud total 70.0 m"
          },
          "count": 10,
          "length_m": 70.0,
          "kg_per_m": 33.7,
          "kg": 2359.0
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C6, C12, C13 — 3 pieces, total length 21.0 m",
            "es": "C6, C12, C13 — 3 piezas, longitud total 21.0 m"
          },
          "count": 3,
          "length_m": 21.0,
          "kg_per_m": 51.2,
          "kg": 1075.2
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 160",
          "where": {
            "en": "C8, C9 — 2 pieces, total length 14.0 m",
            "es": "C8, C9 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 42.6,
          "kg": 596.4
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 200",
          "where": {
            "en": "C5 — 1 pieces, total length 7.0 m",
            "es": "C5 — 1 piezas, longitud total 7.0 m"
          },
          "count": 1,
          "length_m": 7.0,
          "kg_per_m": 61.3,
          "kg": 429.1
        },
        {
          "group": {
            "en": "Stair stringers (estimate, steps excluded)",
            "es": "Zancas de escalera (estimación, peldaños no incluidos)"
          },
          "profile": "UPN 180",
          "where": {
            "en": "12 stringers, total 38.7 m",
            "es": "12 zancas, longitud total 38.7 m"
          },
          "count": 12,
          "length_m": 38.67,
          "kg_per_m": 22.0,
          "kg": 850.7
        },
        {
          "group": {
            "en": "Connections, plates, stiffeners, bolts (+12 %)",
            "es": "Uniones, chapas, rigidizadores y tornillería (+12 %)"
          },
          "profile": "plates/bolts",
          "where": {
            "en": "Allowance on all members above",
            "es": "Repercusión sobre todos los elementos anteriores"
          },
          "count": 1,
          "length_m": 0.0,
          "kg_per_m": 0.0,
          "kg": 1568.2
        }
      ],
      "slab": {
        "type": {
          "en": "Composite steel-deck slab (forjado de chapa colaborante), 60 mm trapezoidal deck 0.8–1.0 mm, HA-25, mesh; 13 cm on every floor; propped at mid-span when concreting",
          "es": "Forjado de chapa colaborante, chapa grecada de 60 mm y 0,8–1,0 mm, HA-25, mallazo; canto 13 cm en todas las plantas; apuntalado en centro de vano durante el hormigonado"
        },
        "thickness_cm": 13,
        "area_m2": 253.8
      },
      "column_loads": [
        {
          "id": "C1",
          "N_sls_kN": 111,
          "N_uls_kN": 153
        },
        {
          "id": "C2",
          "N_sls_kN": 208,
          "N_uls_kN": 288
        },
        {
          "id": "C3",
          "N_sls_kN": 182,
          "N_uls_kN": 251
        },
        {
          "id": "C4",
          "N_sls_kN": 239,
          "N_uls_kN": 373
        },
        {
          "id": "C5",
          "N_sls_kN": 538,
          "N_uls_kN": 838
        },
        {
          "id": "C6",
          "N_sls_kN": 468,
          "N_uls_kN": 741
        },
        {
          "id": "C7",
          "N_sls_kN": 126,
          "N_uls_kN": 175
        },
        {
          "id": "C8",
          "N_sls_kN": 350,
          "N_uls_kN": 525
        },
        {
          "id": "C9",
          "N_sls_kN": 321,
          "N_uls_kN": 484
        },
        {
          "id": "C10",
          "N_sls_kN": 188,
          "N_uls_kN": 303
        },
        {
          "id": "C11",
          "N_sls_kN": 115,
          "N_uls_kN": 158
        },
        {
          "id": "C12",
          "N_sls_kN": 349,
          "N_uls_kN": 564
        },
        {
          "id": "C13",
          "N_sls_kN": 401,
          "N_uls_kN": 636
        },
        {
          "id": "C16",
          "N_sls_kN": 97,
          "N_uls_kN": 134
        },
        {
          "id": "C17",
          "N_sls_kN": 54,
          "N_uls_kN": 76
        },
        {
          "id": "C18",
          "N_sls_kN": 133,
          "N_uls_kN": 186
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2; C16 ×2; C17 ×2; C18 ×2 → 33 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C12, C13 up to 193 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2; C16 ×2; C17 ×2; C18 ×2 → 33 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C12, C13 hasta 193 kN — la absorben los micropilotes a tracción."
          }
        },
        {
          "type": {
            "en": "Alternative: shallow footings at 150 kPa (only if the geotechnical study allows)",
            "es": "Alternativa: zapatas a 150 kPa (sólo si el estudio geotécnico lo permite)"
          },
          "detail": {
            "en": "Required plan sizes: C1 0.95×0.95 m (corner); C2 1.05×1.60 m (eccentric); C3 1.20×1.20 m (corner); C4 1.10×1.65 m (eccentric); C5 2.00×2.00 m (centred); C6 1.55×2.35 m (eccentric); C7 0.80×1.25 m (eccentric); C8 1.65×1.65 m (centred); C9 1.30×1.95 m (eccentric); C10 1.00×1.50 m (eccentric); C11 0.75×1.15 m (eccentric); C12 1.60×1.60 m (corner); C13 1.75×1.75 m (corner); C16 0.70×1.05 m (eccentric); C17 0.65×0.65 m (centred); C18 1.00×1.00 m (centred). Only C5, C8, C17 and C18 can be centred footings. All perimeter columns sit 0.30 m from the party wall or 0.6 m from the retained facades, so they need eccentric party-wall / corner footings (zapatas de medianería / esquina) with strap beams (vigas centradoras). C7 and C8 are only about 1.8 m apart and C8's footing is large, so they need a combined footing. The bracing columns (C5, C6, C12, C13) have net uplift under wind, so footings there would need heavy ballast or combined footings. Risks: settlement in soft clay next to old facade footings, and digging beside the neighbour's foundation (possible underpinning).",
            "es": "Dimensiones necesarias en planta: C1 0,95×0,95 m (de esquina); C2 1,05×1,60 m (medianera/fachada); C3 1,20×1,20 m (de esquina); C4 1,10×1,65 m (medianera/fachada); C5 2,00×2,00 m (centrada); C6 1,55×2,35 m (medianera/fachada); C7 0,80×1,25 m (medianera/fachada); C8 1,65×1,65 m (centrada); C9 1,30×1,95 m (medianera/fachada); C10 1,00×1,50 m (medianera/fachada); C11 0,75×1,15 m (medianera/fachada); C12 1,60×1,60 m (de esquina); C13 1,75×1,75 m (de esquina); C16 0,70×1,05 m (medianera/fachada); C17 0,65×0,65 m (centrada); C18 1,00×1,00 m (centrada). Sólo C5, C8, C17 y C18 admiten zapata centrada. Todos los pilares perimetrales están a 0,30 m de la medianera o a 0,6 m de las fachadas conservadas, por lo que necesitan zapatas de medianería / esquina con vigas centradoras. C7 y C8 están a sólo ~1,8 m y la zapata de C8 es grande: zapata combinada. Los pilares de arriostramiento (C5, C6, C12, C13) tienen tracción neta con viento, por lo que sus zapatas necesitarían mucho lastre o ser combinadas. Riesgos: asientos en arcillas blandas junto a la cimentación de las fachadas antiguas y excavación junto a la cimentación del colindante (posible recalce)."
          }
        },
        {
          "type": {
            "en": "Geotechnical study required",
            "es": "Estudio geotécnico obligatorio"
          },
          "detail": {
            "en": "CTE DB-SE-C requires an estudio geotécnico, typically 2–3 boreholes or penetrometer tests to ≥ 15–20 m, plus water table level and soil aggressiveness. It sets the allowable pressure, micropile length and capacity (pile load test recommended), and the slab-on-grade design.",
            "es": "El CTE DB-SE-C exige estudio geotécnico, normalmente 2–3 sondeos o penetrómetros hasta ≥ 15–20 m, con nivel freático y agresividad del terreno. Fija la tensión admisible, la longitud y capacidad de los micropilotes (se recomienda prueba de carga) y la solera."
          }
        }
      ],
      "fire": {
        "en": "Evacuation height = ático floor level = 10.0 m (≤ 14 m → unprotected stair allowed, DB-SI SI3 Table 5.1; ≤ 15 m → residential structure R60, SI6 Table 3.1). The whole building is Residencial Vivienda (PB is a flat too), so there is no other-use fire sector and the structure is R60 throughout, including the PB columns and the P1 floor. 13 cm slabs give h_eff ≈ 92 mm ≥ 80 mm (R60, EN 1994-1-2). Steel protected with intumescent paint (R60).",
        "es": "Altura de evacuación = cota del suelo del ático = 10,0 m (≤ 14 m → se admite escalera no protegida, DB-SI SI3 Tabla 5.1; ≤ 15 m → estructura residencial R60, SI6 Tabla 3.1). Todo el edificio es Residencial Vivienda (la PB también es vivienda), por lo que no hay sector de otro uso y la estructura es R60 en su totalidad, incluidos los pilares de PB y el forjado de P1. Forjados de 13 cm: h_eff ≈ 92 mm ≥ 80 mm (R60, UNE-EN 1994-1-2). Acero protegido con pintura intumescente (R60)."
      },
      "totals": {
        "steel_kg": 14636.9,
        "steel_kg_m2": 48.0,
        "cost_eur_low": 116500.0,
        "cost_eur_high": 178800.0,
        "cost_per_home_low": 29100.0,
        "cost_per_home_high": 44700.0
      },
      "checks": [
        {
          "item": {
            "en": "Composite slab: max span / depth",
            "es": "Forjado colaborante: luz máxima / canto"
          },
          "value": "3.90 m / 0.13 m = 30 ≤ 32 (EC4 guidance); propped at mid-span when concreting",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: max utilisation (bending + strut axial / shear / deflection)",
            "es": "Vigas: aprovechamiento máximo (flexión + axil de montante / cortante / flecha)"
          },
          "value": "0.97 — B1 IPE 180 at Ático + terraza (cota cornisa)",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: active deflection (worst ratio to limit)",
            "es": "Vigas: flecha activa (peor relación con el límite)"
          },
          "value": "6.0 mm vs 6.2 mm — B1 IPE 180",
          "ok": true
        },
        {
          "item": {
            "en": "Columns: max N_Ed / Nb,Rd (weak axis, Lcr = storey height)",
            "es": "Pilares: N_Ed / Nb,Rd máximo (eje débil, Lcr = altura de planta)"
          },
          "value": "0.84 ≤ 0.85 — C4 HEB 140, storey PB",
          "ok": true
        },
        {
          "item": {
            "en": "Bracing diagonals: max utilisation (rods tension-only, SHS tension + compression)",
            "es": "Diagonales de arriostramiento: aprovechamiento máximo (redondos sólo tracción, tubos tracción y compresión)"
          },
          "value": "0.98",
          "ok": true
        },
        {
          "item": {
            "en": "Lateral drift under characteristic wind",
            "es": "Desplome con viento característico"
          },
          "value": "top 23.5 mm ≤ H/500 = 26.0 mm; worst storey 60 % of h/250",
          "ok": true
        },
        {
          "item": {
            "en": "Seismic NCSE-02",
            "es": "Sismo NCSE-02"
          },
          "value": "not mandatory (ab 0.06g < 0.08g, normal importance, braced both ways, < 7 storeys); indicative Vs ≈ 255 kN vs ULS wind x 254 kN / y 110 kN — if applied voluntarily it would govern the party-wall (y) bracing",
          "ok": true
        },
        {
          "item": {
            "en": "Uplift at bracing columns (characteristic)",
            "es": "Tracción en pilares de arriostramiento (característica)"
          },
          "value": "max 193 kN → micropiles in tension",
          "ok": true
        },
        {
          "item": {
            "en": "Headroom: 3.0 m floor-to-floor",
            "es": "Altura libre: 3,0 m entre forjados"
          },
          "value": "3.00 − 0.13 slab − 0.07 finishes = 2.80 m clear; beams ≤ 300 mm sit in cross walls",
          "ok": true
        },
        {
          "item": {
            "en": "Fire resistance",
            "es": "Resistencia al fuego"
          },
          "value": "R60 throughout, residential only (h_evac 10.0 m ≤ 15 m); no other-use sector",
          "ok": true
        },
        {
          "item": {
            "en": "Clearance of columns and beams to the stair opening and lift shaft (≥ 0.10 m)",
            "es": "Holgura de pilares y vigas al hueco de escalera y de ascensor (≥ 0,10 m)"
          },
          "value": "min 0.10 m (C18 HEB 140)",
          "ok": true
        }
      ],
      "core": {
        "stair": [
          0.15,
          2.2,
          11.76,
          15.0
        ],
        "stair_run_end": 14.0,
        "lift": [
          2.3,
          3.8,
          10.2,
          11.8
        ],
        "core_y": 10.15
      },
      "grid": {
        "columns": [
          {
            "id": "C1",
            "x": 0.3,
            "y": 0.6
          },
          {
            "id": "C2",
            "x": 3.385,
            "y": 0.6
          },
          {
            "id": "C3",
            "x": 7.41,
            "y": 0.6
          },
          {
            "id": "C4",
            "x": 0.3,
            "y": 4.0
          },
          {
            "id": "C5",
            "x": 3.4,
            "y": 4.0
          },
          {
            "id": "C6",
            "x": 6.25,
            "y": 4.0
          },
          {
            "id": "C7",
            "x": 0.3,
            "y": 7.9
          },
          {
            "id": "C8",
            "x": 2.13,
            "y": 7.9
          },
          {
            "id": "C9",
            "x": 4.91,
            "y": 7.9
          },
          {
            "id": "C10",
            "x": 0.3,
            "y": 11.55
          },
          {
            "id": "C11",
            "x": 4.17,
            "y": 10.05
          },
          {
            "id": "C12",
            "x": 0.3,
            "y": 15.2
          },
          {
            "id": "C13",
            "x": 2.45,
            "y": 15.2
          },
          {
            "id": "C16",
            "x": 4.15,
            "y": 11.4
          },
          {
            "id": "C17",
            "x": 2.45,
            "y": 12.0
          },
          {
            "id": "C18",
            "x": 2.13,
            "y": 11.55
          },
          {
            "id": "C14",
            "x": 4.4,
            "y": 4.0
          },
          {
            "id": "C15",
            "x": 4.4,
            "y": 7.9
          }
        ],
        "beams": [
          {
            "id": "B1",
            "from": "C1",
            "to": "C2",
            "role": {
              "en": "Burjassot facade beam, bay 1 (behind retained facade)",
              "es": "Viga de fachada Burjassot, vano 1 (tras la fachada conservada)"
            }
          },
          {
            "id": "B2",
            "from": "C2",
            "to": "C3",
            "role": {
              "en": "Burjassot facade beam, bay 2",
              "es": "Viga de fachada Burjassot, vano 2"
            }
          },
          {
            "id": "B3",
            "from": "C4",
            "to": "C5",
            "role": {
              "en": "Primary floor beam in cross wall y=4.0",
              "es": "Viga principal en tabique y=4,0"
            }
          },
          {
            "id": "B4",
            "from": "C5",
            "to": "C6",
            "role": {
              "en": "Primary floor beam y=4.0 + strut of braced bay C5–C6; carries ático post C14",
              "es": "Viga principal y=4,0 + montante del arriostramiento C5–C6; recibe el pilarillo C14 del ático"
            }
          },
          {
            "id": "B5",
            "from": "C7",
            "to": "C8",
            "role": {
              "en": "Floor beam y=7.9 across the hall",
              "es": "Viga y=7,9 sobre el pasillo"
            }
          },
          {
            "id": "B6",
            "from": "C8",
            "to": "C9",
            "role": {
              "en": "Primary floor beam y=7.9 + strut of braced bay C8–C9; carries ático post C15",
              "es": "Viga principal y=7,9 + montante del arriostramiento C8–C9; recibe C15"
            }
          },
          {
            "id": "B8",
            "from": "C12",
            "to": "C13",
            "role": {
              "en": "Back beam y=15.20 + strut of back bracing (behind the stair half-landing)",
              "es": "Viga trasera y=15,20 + montante del arriostramiento trasero (detrás de la meseta)"
            }
          },
          {
            "id": "B9",
            "from": "C1",
            "to": "C4",
            "role": {
              "en": "Party-wall edge beam / tie",
              "es": "Viga de borde de medianera / atado"
            }
          },
          {
            "id": "B10",
            "from": "C4",
            "to": "C7",
            "role": {
              "en": "Party-wall edge beam + bracing strut",
              "es": "Viga de borde de medianera + montante de arriostramiento"
            }
          },
          {
            "id": "B11",
            "from": "C7",
            "to": "C10",
            "role": {
              "en": "Party-wall edge beam + bracing strut (no beam beyond C10: stair)",
              "es": "Viga de borde de medianera + montante (sin viga más allá de C10: escalera)"
            }
          },
          {
            "id": "B13",
            "from": "C3",
            "to": "C6",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B14",
            "from": "C6",
            "to": "C9",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B15",
            "from": "C9",
            "to": "C11",
            "role": {
              "en": "Carrasqueta facade edge beam",
              "es": "Viga de borde de fachada Carrasqueta"
            }
          },
          {
            "id": "B16A",
            "from": "C11",
            "to": "C16",
            "role": {
              "en": "Facade edge beam beside the lift (new facade)",
              "es": "Viga de borde de fachada junto al ascensor (fachada nueva)"
            }
          },
          {
            "id": "B16",
            "from": "C16",
            "to": "C13",
            "role": {
              "en": "Facade edge beam, back part (new facade); receives T3",
              "es": "Viga de borde de fachada, parte trasera (fachada nueva); recibe T3"
            }
          },
          {
            "id": "TR",
            "from": "C10",
            "to": "C18",
            "role": {
              "en": "Landing edge beam y=11.55, 0.21 m before the stair opening (carries the flights)",
              "es": "Viga de borde del rellano y=11,55, a 0,21 m del hueco de escalera (recibe los tramos)"
            }
          },
          {
            "id": "T4",
            "from": "C8",
            "to": "C18",
            "role": {
              "en": "Trimmer x=2.13 along the west side of the lift (receives B7)",
              "es": "Brochal x=2,13 junto al lado oeste del ascensor (recibe B7)"
            }
          },
          {
            "id": "T1",
            "from": "C17",
            "to": "C13",
            "role": {
              "en": "Trimmer x=2.45 along the east side of the stair",
              "es": "Brochal x=2,45 junto al lado este de la escalera"
            }
          },
          {
            "id": "B17",
            "from": "C5",
            "to": "C14",
            "role": {
              "en": "Ático roof beam y=4.0",
              "es": "Viga de cubierta del ático y=4,0"
            }
          },
          {
            "id": "B18",
            "from": "C8",
            "to": "C15",
            "role": {
              "en": "Ático roof beam y=7.9 + strut",
              "es": "Viga de cubierta del ático y=7,9 + montante"
            }
          },
          {
            "id": "B19",
            "from": "C14",
            "to": "C15",
            "role": {
              "en": "Ático side edge beam x=4.4",
              "es": "Viga de borde lateral del ático x=4,4"
            }
          },
          {
            "id": "B20",
            "from": "C15",
            "to": "C11",
            "role": {
              "en": "Ático side edge beam",
              "es": "Viga de borde lateral del ático"
            }
          }
        ],
        "bracing": [
          {
            "from": "C4",
            "to": "C7",
            "plane": {
              "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227)",
              "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227)"
            }
          },
          {
            "from": "C7",
            "to": "C10",
            "plane": {
              "en": "Party-wall plane x=0.30, bays C4–C7–C10 (blind wall, neighbour no. 227)",
              "es": "Plano de medianera x=0,30, vanos C4–C7–C10 (paño ciego, colindante nº 227)"
            }
          },
          {
            "from": "C5",
            "to": "C6",
            "plane": {
              "en": "Cross-wall plane y=4.0 between C5 and C6 (blind wall living room | bedroom 1, PB living room | bathroom; not in the ático)",
              "es": "Plano del tabique transversal y=4,0 entre C5 y C6 (paño ciego salón | dormitorio 1; en PB salón | baño; no en el ático)"
            }
          },
          {
            "from": "C8",
            "to": "C9",
            "plane": {
              "en": "Cross-wall plane y=7.9 between C8 and C9 (blind wall bathroom | bedroom 2, PB bedroom 1 | bedroom 2); ático storey C8–C15",
              "es": "Plano del tabique transversal y=7,9 entre C8 y C9 (paño ciego baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); en el ático C8–C15"
            }
          },
          {
            "from": "C8",
            "to": "C15",
            "plane": {
              "en": "Ático storey only: plane y=7.9 (C8–C15); needs a solid wall at y=7.9 in the studio",
              "es": "Sólo planta ático: plano y=7,9 (C8–C15); requiere un muro ciego en y=7,9 en el estudio"
            }
          },
          {
            "from": "C12",
            "to": "C13",
            "plane": {
              "en": "Back boundary plane y=15.20 (blind, behind the stair half-landing)",
              "es": "Plano del lindero trasero y=15,20 (ciego, detrás de la meseta de la escalera)"
            }
          }
        ],
        "slab_span_note": {
          "en": "Redesigned with-lift core (options A and B). The composite slab (13 cm) spans in y over the beam rows at y = 0.60 / 4.00 / 7.90 and the core beams, so the spans are 3.40 / 3.90 / 3.65 m (landing, 7.90→11.55). The core is framed around the two openings without crossing them:\n- TR (C10–C18, y = 11.55) is the landing edge in front of the stair.\n- T4 (C8–C18, x = 2.13) runs along the west side of the lift.\n- B7 (y = 10.05, from T4 to C11) runs along the south side of the lift.\n- T3 (y = 12.00, from C17 to the facade beam B16) runs along the north side of the lift.\n- T1 (C17–C13, x = 2.45) runs along the east side of the stair.\n- B8 (C12–C13, y = 15.20) is behind the half-landing.\nColumns and beams keep at least 0.10 m from the stair opening (x 0.15–2.20, y 11.76–15.00) and the lift shaft (x 2.30–3.80, y 10.20–11.80). B7 and T3 rest on other beams, so they are not listed between columns; frame.json gives their coordinates. C14 and C15 are ático posts standing on B4 and B6. Lateral stability comes from X-bracing in four blind planes: the party wall (C4–C7–C10), the cross walls y = 4.0 (C5–C6) and y = 7.9 (C8–C9), and the back boundary (C12–C13).",
          "es": "Núcleo rediseñado con ascensor (opciones A y B). El forjado colaborante (13 cm) trabaja en dirección y sobre las alineaciones de vigas y = 0,60 / 4,00 / 7,90 y las vigas del núcleo, con luces de 3,40 / 3,90 / 3,65 m (rellano, 7,90→11,55). El núcleo se enmarca alrededor de los dos huecos sin cruzarlos:\n- TR (C10–C18, y = 11,55) es el borde del rellano delante de la escalera.\n- T4 (C8–C18, x = 2,13) va junto al lado oeste del ascensor.\n- B7 (y = 10,05, de T4 a C11) va junto al lado sur del ascensor.\n- T3 (y = 12,00, de C17 a la viga de fachada B16) va junto al lado norte del ascensor.\n- T1 (C17–C13, x = 2,45) va junto al lado este de la escalera.\n- B8 (C12–C13, y = 15,20) queda detrás de la meseta.\nPilares y vigas quedan a ≥ 0,10 m del hueco de escalera (x 0,15–2,20, y 11,76–15,00) y del hueco del ascensor (x 2,30–3,80, y 10,20–11,80). B7 y T3 apoyan en otras vigas, por eso no figuran entre pilares; sus coordenadas están en frame.json. C14 y C15 son pilarillos del ático sobre B4 y B6. La estabilidad horizontal la dan cruces de San Andrés en cuatro planos ciegos: medianera (C4–C7–C10), tabiques y = 4,0 (C5–C6) e y = 7,9 (C8–C9) y lindero trasero (C12–C13)."
        }
      }
    },
    "A0": {
      "label": {
        "en": "Option A0 — PB + 3 + ático, no lift",
        "es": "Opción A0 — PB + 3 + ático, sin ascensor"
      },
      "levels": [
        {
          "name": "PB",
          "h": 4.0
        },
        {
          "name": "P1",
          "h": 3.0
        },
        {
          "name": "P2",
          "h": 3.0
        },
        {
          "name": "P3",
          "h": 3.0
        },
        {
          "name": "Ático",
          "h": 3.0
        }
      ],
      "cornice_m": 13.0,
      "top_m": 16.0,
      "homes": 5,
      "built_m2": 390.2,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (stair opening; lift shaft closed)",
            "es": "Brochales del núcleo (hueco de escalera; sin hueco de ascensor)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "8 pieces over all levels, total length 22.0 m",
            "es": "8 piezas en todas las plantas, longitud total 22.0 m"
          },
          "count": 8,
          "length_m": 22.0,
          "kg_per_m": 15.8,
          "kg": 347.6
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "11 pieces over all levels, total length 41.8 m",
            "es": "11 piezas en todas las plantas, longitud total 41.8 m"
          },
          "count": 11,
          "length_m": 41.82,
          "kg_per_m": 18.8,
          "kg": 786.2
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 240",
          "where": {
            "en": "3 pieces over all levels, total length 12.1 m",
            "es": "3 piezas en todas las plantas, longitud total 12.1 m"
          },
          "count": 3,
          "length_m": 12.08,
          "kg_per_m": 30.7,
          "kg": 370.9
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "6 pieces over all levels, total length 22.4 m",
            "es": "6 piezas en todas las plantas, longitud total 22.4 m"
          },
          "count": 6,
          "length_m": 22.36,
          "kg_per_m": 15.8,
          "kg": 353.3
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "4 pieces over all levels, total length 13.3 m",
            "es": "4 piezas en todas las plantas, longitud total 13.3 m"
          },
          "count": 4,
          "length_m": 13.28,
          "kg_per_m": 22.4,
          "kg": 297.5
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "13 pieces over all levels, total length 40.0 m",
            "es": "13 piezas en todas las plantas, longitud total 40.0 m"
          },
          "count": 13,
          "length_m": 39.99,
          "kg_per_m": 22.4,
          "kg": 895.8
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "8 pieces over all levels, total length 15.4 m",
            "es": "8 piezas en todas las plantas, longitud total 15.4 m"
          },
          "count": 8,
          "length_m": 15.44,
          "kg_per_m": 15.8,
          "kg": 244.0
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "2 pieces over all levels, total length 5.7 m",
            "es": "2 piezas en todas las plantas, longitud total 5.7 m"
          },
          "count": 2,
          "length_m": 5.73,
          "kg_per_m": 18.8,
          "kg": 107.7
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 2.7 m",
            "es": "1 piezas en todas las plantas, longitud total 2.7 m"
          },
          "count": 1,
          "length_m": 2.74,
          "kg_per_m": 26.2,
          "kg": 71.8
        },
        {
          "group": {
            "en": "Party-wall edge beams / bracing struts",
            "es": "Vigas de borde de medianera / montantes de arriostramiento"
          },
          "profile": "IPE 200",
          "where": {
            "en": "16 pieces over all levels, total length 57.8 m",
            "es": "16 piezas en todas las plantas, longitud total 57.8 m"
          },
          "count": 16,
          "length_m": 57.8,
          "kg_per_m": 22.4,
          "kg": 1294.7
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 160",
          "where": {
            "en": "11 pieces over all levels, total length 32.1 m",
            "es": "11 piezas en todas las plantas, longitud total 32.1 m"
          },
          "count": 11,
          "length_m": 32.14,
          "kg_per_m": 15.8,
          "kg": 507.8
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 200",
          "where": {
            "en": "1 pieces over all levels, total length 3.4 m",
            "es": "1 piezas en todas las plantas, longitud total 3.4 m"
          },
          "count": 1,
          "length_m": 3.41,
          "kg_per_m": 22.4,
          "kg": 76.4
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 120x120x6",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 4 diagonals, total 16.5 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 4 diagonales, total 16.5 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 16.49,
          "kg_per_m": 23.1,
          "kg": 380.9
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 100x100x6",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 19.03,
          "kg": 140.6
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 90x90x5",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 14.41,
          "kg": 106.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 8.79,
          "kg": 65.0
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø30 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 4 diagonals, total 21.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 4 diagonales, total 21.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 21.42,
          "kg_per_m": 6.11,
          "kg": 130.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 4 diagonals, total 18.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 4 diagonales, total 18.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 18.61,
          "kg_per_m": 3.91,
          "kg": 72.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 8 diagonals, total 37.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 8 diagonales, total 37.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 8,
          "length_m": 37.23,
          "kg_per_m": 1.74,
          "kg": 64.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 4 diagonals, total 18.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 4 diagonales, total 18.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 18.61,
          "kg_per_m": 2.72,
          "kg": 50.6
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 90x90x5",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 9.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 9.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.7,
          "kg_per_m": 14.41,
          "kg": 139.8
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 8.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 8.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.13,
          "kg_per_m": 10.14,
          "kg": 82.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 8.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 8.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.13,
          "kg_per_m": 8.79,
          "kg": 71.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 8.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 8.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.13,
          "kg_per_m": 4.94,
          "kg": 40.2
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 9.8 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 9.8 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.84,
          "kg_per_m": 10.14,
          "kg": 99.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.3,
          "kg_per_m": 8.79,
          "kg": 73.0
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.3,
          "kg_per_m": 4.94,
          "kg": 41.0
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.3,
          "kg_per_m": 3.91,
          "kg": 32.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 7.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 7.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.69,
          "kg_per_m": 2.72,
          "kg": 20.9
        },
        {
          "group": {
            "en": "Columns P2–P3",
            "es": "Pilares P2–P3"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13 — 13 pieces, total length 78.0 m",
            "es": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13 — 13 piezas, longitud total 78.0 m"
          },
          "count": 13,
          "length_m": 78.0,
          "kg_per_m": 33.7,
          "kg": 2628.6
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 160",
          "where": {
            "en": "C2, C3, C4, C10, C11 — 5 pieces, total length 35.0 m",
            "es": "C2, C3, C4, C10, C11 — 5 piezas, longitud total 35.0 m"
          },
          "count": 5,
          "length_m": 35.0,
          "kg_per_m": 42.6,
          "kg": 1491.0
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 200",
          "where": {
            "en": "C9, C12, C13 — 3 pieces, total length 21.0 m",
            "es": "C9, C12, C13 — 3 piezas, longitud total 21.0 m"
          },
          "count": 3,
          "length_m": 21.0,
          "kg_per_m": 61.3,
          "kg": 1287.3
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 220",
          "where": {
            "en": "C5, C6 — 2 pieces, total length 14.0 m",
            "es": "C5, C6 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 71.5,
          "kg": 1001.0
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C7 — 2 pieces, total length 14.0 m",
            "es": "C1, C7 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 33.7,
          "kg": 471.8
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C8 — 1 pieces, total length 7.0 m",
            "es": "C8 — 1 piezas, longitud total 7.0 m"
          },
          "count": 1,
          "length_m": 7.0,
          "kg_per_m": 51.2,
          "kg": 358.4
        },
        {
          "group": {
            "en": "Columns Ático",
            "es": "Pilares Ático"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C4, C5, C7, C8, C10, C11, C12, C13 — 8 pieces, total length 24.0 m",
            "es": "C4, C5, C7, C8, C10, C11, C12, C13 — 8 piezas, longitud total 24.0 m"
          },
          "count": 8,
          "length_m": 24.0,
          "kg_per_m": 33.7,
          "kg": 808.8
        },
        {
          "group": {
            "en": "Columns Ático",
            "es": "Pilares Ático"
          },
          "profile": "HEB 120",
          "where": {
            "en": "C14, C15 — 2 pieces, total length 6.0 m",
            "es": "C14, C15 — 2 piezas, longitud total 6.0 m"
          },
          "count": 2,
          "length_m": 6.0,
          "kg_per_m": 26.7,
          "kg": 160.2
        },
        {
          "group": {
            "en": "Stair stringers (estimate, steps excluded)",
            "es": "Zancas de escalera (estimación, peldaños no incluidos)"
          },
          "profile": "UPN 180",
          "where": {
            "en": "16 stringers, total 50.3 m",
            "es": "16 zancas, longitud total 50.3 m"
          },
          "count": 16,
          "length_m": 50.27,
          "kg_per_m": 22.0,
          "kg": 1105.9
        },
        {
          "group": {
            "en": "Connections, plates, stiffeners, bolts (+12 %)",
            "es": "Uniones, chapas, rigidizadores y tornillería (+12 %)"
          },
          "profile": "plates/bolts",
          "where": {
            "en": "Allowance on all members above",
            "es": "Repercusión sobre todos los elementos anteriores"
          },
          "count": 1,
          "length_m": 0.0,
          "kg_per_m": 0.0,
          "kg": 1953.6
        }
      ],
      "slab": {
        "type": {
          "en": "Composite steel-deck slab (forjado de chapa colaborante), 60 mm trapezoidal deck 0.8–1.0 mm, HA-25, mesh; 13 cm on every floor; propped at mid-span when concreting",
          "es": "Forjado de chapa colaborante, chapa grecada de 60 mm y 0,8–1,0 mm, HA-25, mallazo; canto 13 cm en todas las plantas; apuntalado en centro de vano durante el hormigonado"
        },
        "thickness_cm": 13,
        "area_m2": 348.0
      },
      "column_loads": [
        {
          "id": "C1",
          "N_sls_kN": 160,
          "N_uls_kN": 222
        },
        {
          "id": "C2",
          "N_sls_kN": 302,
          "N_uls_kN": 418
        },
        {
          "id": "C3",
          "N_sls_kN": 275,
          "N_uls_kN": 379
        },
        {
          "id": "C4",
          "N_sls_kN": 356,
          "N_uls_kN": 548
        },
        {
          "id": "C5",
          "N_sls_kN": 821,
          "N_uls_kN": 1262
        },
        {
          "id": "C6",
          "N_sls_kN": 750,
          "N_uls_kN": 1164
        },
        {
          "id": "C7",
          "N_sls_kN": 141,
          "N_uls_kN": 196
        },
        {
          "id": "C8",
          "N_sls_kN": 504,
          "N_uls_kN": 760
        },
        {
          "id": "C9",
          "N_sls_kN": 537,
          "N_uls_kN": 803
        },
        {
          "id": "C10",
          "N_sls_kN": 350,
          "N_uls_kN": 542
        },
        {
          "id": "C11",
          "N_sls_kN": 338,
          "N_uls_kN": 468
        },
        {
          "id": "C12",
          "N_sls_kN": 528,
          "N_uls_kN": 831
        },
        {
          "id": "C13",
          "N_sls_kN": 577,
          "N_uls_kN": 898
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×4; C7 ×2; C8 ×3; C9 ×3; C10 ×2; C11 ×2; C12 ×3; C13 ×3 → 34 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C8, C9, C12, C13 up to 316 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×4; C7 ×2; C8 ×3; C9 ×3; C10 ×2; C11 ×2; C12 ×3; C13 ×3 → 34 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C8, C9, C12, C13 hasta 316 kN — la absorben los micropilotes a tracción."
          }
        },
        {
          "type": {
            "en": "Alternative: shallow footings at 150 kPa (only if the geotechnical study allows)",
            "es": "Alternativa: zapatas a 150 kPa (sólo si el estudio geotécnico lo permite)"
          },
          "detail": {
            "en": "Required plan sizes: C1 1.10×1.10 m (corner); C2 1.25×1.90 m (eccentric); C3 1.45×1.45 m (corner); C4 1.35×2.05 m (eccentric); C5 2.50×2.50 m (centred); C6 1.95×2.95 m (eccentric); C7 0.85×1.30 m (eccentric); C8 1.95×1.95 m (centred); C9 1.65×2.50 m (eccentric); C10 1.35×2.05 m (eccentric); C11 1.30×1.95 m (eccentric); C12 2.00×2.00 m (corner); C13 2.10×2.10 m (corner). Only C5 and C8 can be centred footings. All perimeter columns sit 0.30 m from the party wall or 0.6 m from the retained facades, so they need eccentric party-wall / corner footings (zapatas de medianería / esquina) with strap beams (vigas centradoras). C7 and C8 are only 1.7 m apart and C8's footing is large, so they need a combined footing. The bracing columns (C5, C6, C8, C9, C12, C13) have net uplift under wind, so footings there would need heavy ballast or combined footings. Risks: settlement in soft clay next to old facade footings, and digging beside the neighbour's foundation (possible underpinning).",
            "es": "Dimensiones necesarias en planta: C1 1,10×1,10 m (de esquina); C2 1,25×1,90 m (medianera/fachada); C3 1,45×1,45 m (de esquina); C4 1,35×2,05 m (medianera/fachada); C5 2,50×2,50 m (centrada); C6 1,95×2,95 m (medianera/fachada); C7 0,85×1,30 m (medianera/fachada); C8 1,95×1,95 m (centrada); C9 1,65×2,50 m (medianera/fachada); C10 1,35×2,05 m (medianera/fachada); C11 1,30×1,95 m (medianera/fachada); C12 2,00×2,00 m (de esquina); C13 2,10×2,10 m (de esquina). Sólo C5 y C8 admiten zapata centrada. Todos los pilares perimetrales están a 0,30 m de la medianera o a 0,6 m de las fachadas conservadas, por lo que necesitan zapatas de medianería / esquina con vigas centradoras. C7 y C8 están a sólo 1,7 m y la zapata de C8 es grande: zapata combinada. Los pilares de arriostramiento (C5, C6, C8, C9, C12, C13) tienen tracción neta con viento, por lo que sus zapatas necesitarían mucho lastre o ser combinadas. Riesgos: asientos en arcillas blandas junto a la cimentación de las fachadas antiguas y excavación junto a la cimentación del colindante (posible recalce)."
          }
        },
        {
          "type": {
            "en": "Geotechnical study required",
            "es": "Estudio geotécnico obligatorio"
          },
          "detail": {
            "en": "CTE DB-SE-C requires an estudio geotécnico, typically 2–3 boreholes or penetrometer tests to ≥ 15–20 m, plus water table level and soil aggressiveness. It sets the allowable pressure, micropile length and capacity (pile load test recommended), and the slab-on-grade design.",
            "es": "El CTE DB-SE-C exige estudio geotécnico, normalmente 2–3 sondeos o penetrómetros hasta ≥ 15–20 m, con nivel freático y agresividad del terreno. Fija la tensión admisible, la longitud y capacidad de los micropilotes (se recomienda prueba de carga) y la solera."
          }
        }
      ],
      "fire": {
        "en": "Evacuation height = ático floor level = 13.0 m (≤ 14 m → unprotected stair allowed, DB-SI SI3 Table 5.1; ≤ 15 m → residential structure R60, SI6 Table 3.1). The whole building is Residencial Vivienda (PB is a flat too), so there is no other-use fire sector and the structure is R60 throughout, including the PB columns and the P1 floor. 13 cm slabs give h_eff ≈ 92 mm ≥ 80 mm (R60, EN 1994-1-2). Steel protected with intumescent paint (R60).",
        "es": "Altura de evacuación = cota del suelo del ático = 13,0 m (≤ 14 m → se admite escalera no protegida, DB-SI SI3 Tabla 5.1; ≤ 15 m → estructura residencial R60, SI6 Tabla 3.1). Todo el edificio es Residencial Vivienda (la PB también es vivienda), por lo que no hay sector de otro uso y la estructura es R60 en su totalidad, incluidos los pilares de PB y el forjado de P1. Forjados de 13 cm: h_eff ≈ 92 mm ≥ 80 mm (R60, UNE-EN 1994-1-2). Acero protegido con pintura intumescente (R60)."
      },
      "totals": {
        "steel_kg": 18233.5,
        "steel_kg_m2": 46.7,
        "cost_eur_low": 136000.0,
        "cost_eur_high": 208700.0,
        "cost_per_home_low": 27200.0,
        "cost_per_home_high": 41700.0
      },
      "checks": [
        {
          "item": {
            "en": "Composite slab: max span / depth",
            "es": "Forjado colaborante: luz máxima / canto"
          },
          "value": "3.90 m / 0.13 m = 30 ≤ 32 (EC4 guidance); propped at mid-span when concreting",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: max utilisation (bending + strut axial / shear / deflection)",
            "es": "Vigas: aprovechamiento máximo (flexión + axil de montante / cortante / flecha)"
          },
          "value": "0.96 — B2 IPE 200 at P1",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: active deflection (worst ratio to limit)",
            "es": "Vigas: flecha activa (peor relación con el límite)"
          },
          "value": "7.7 mm vs 8.1 mm — B2 IPE 200",
          "ok": true
        },
        {
          "item": {
            "en": "Columns: max N_Ed / Nb,Rd (weak axis, Lcr = storey height)",
            "es": "Pilares: N_Ed / Nb,Rd máximo (eje débil, Lcr = altura de planta)"
          },
          "value": "0.83 ≤ 0.85 — C8 HEB 180, storey PB",
          "ok": true
        },
        {
          "item": {
            "en": "Bracing diagonals: max utilisation (rods tension-only, SHS tension + compression)",
            "es": "Diagonales de arriostramiento: aprovechamiento máximo (redondos sólo tracción, tubos tracción y compresión)"
          },
          "value": "0.96",
          "ok": true
        },
        {
          "item": {
            "en": "Lateral drift under characteristic wind",
            "es": "Desplome con viento característico"
          },
          "value": "top 25.6 mm ≤ H/500 = 32.0 mm; worst storey 68 % of h/250",
          "ok": true
        },
        {
          "item": {
            "en": "Seismic NCSE-02",
            "es": "Sismo NCSE-02"
          },
          "value": "not mandatory (ab 0.06g < 0.08g, normal importance, braced both ways, < 7 storeys); indicative Vs ≈ 334 kN vs ULS wind x 346 kN / y 155 kN — if applied voluntarily it would govern the party-wall (y) bracing",
          "ok": true
        },
        {
          "item": {
            "en": "Uplift at bracing columns (characteristic)",
            "es": "Tracción en pilares de arriostramiento (característica)"
          },
          "value": "max 316 kN → micropiles in tension",
          "ok": true
        },
        {
          "item": {
            "en": "Headroom: 3.0 m floor-to-floor",
            "es": "Altura libre: 3,0 m entre forjados"
          },
          "value": "3.00 − 0.13 slab − 0.07 finishes = 2.80 m clear; beams ≤ 300 mm sit in cross walls",
          "ok": true
        },
        {
          "item": {
            "en": "Fire resistance",
            "es": "Resistencia al fuego"
          },
          "value": "R60 throughout, residential only (h_evac 13.0 m ≤ 15 m); no other-use sector",
          "ok": true
        },
        {
          "item": {
            "en": "Accessibility between floors (CTE DB-SUA 9 §1.1.2)",
            "es": "Accesibilidad entre plantas (CTE DB-SUA 9 §1.1.2)"
          },
          "value": "no lift: 4 floors to climb from the entrance to the ático (> 2) → accessible lift required; does not comply",
          "ok": false
        }
      ],
      "core": {
        "stair": [
          0.15,
          2.1,
          12.85,
          15.15
        ],
        "stair_run_end": null,
        "lift": null,
        "core_y": 11.4
      }
    },
    "B0": {
      "label": {
        "en": "Option B0 — PB + 2 + ático, no lift",
        "es": "Opción B0 — PB + 2 + ático, sin ascensor"
      },
      "levels": [
        {
          "name": "PB",
          "h": 4.0
        },
        {
          "name": "P1",
          "h": 3.0
        },
        {
          "name": "P2",
          "h": 3.0
        },
        {
          "name": "Ático",
          "h": 3.0
        }
      ],
      "cornice_m": 10.0,
      "top_m": 13.0,
      "homes": 4,
      "built_m2": 304.9,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (stair opening; lift shaft closed)",
            "es": "Brochales del núcleo (hueco de escalera; sin hueco de ascensor)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "6 pieces over all levels, total length 16.5 m",
            "es": "6 piezas en todas las plantas, longitud total 16.5 m"
          },
          "count": 6,
          "length_m": 16.5,
          "kg_per_m": 15.8,
          "kg": 260.7
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "8 pieces over all levels, total length 30.1 m",
            "es": "8 piezas en todas las plantas, longitud total 30.1 m"
          },
          "count": 8,
          "length_m": 30.09,
          "kg_per_m": 18.8,
          "kg": 565.7
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "5 pieces over all levels, total length 18.8 m",
            "es": "5 piezas en todas las plantas, longitud total 18.8 m"
          },
          "count": 5,
          "length_m": 18.82,
          "kg_per_m": 15.8,
          "kg": 297.4
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 240",
          "where": {
            "en": "2 pieces over all levels, total length 8.1 m",
            "es": "2 piezas en todas las plantas, longitud total 8.1 m"
          },
          "count": 2,
          "length_m": 8.05,
          "kg_per_m": 30.7,
          "kg": 247.1
        },
        {
          "group": {
            "en": "Street-facade edge beams (Burjassot + Carrasqueta)",
            "es": "Vigas de borde de fachada (Burjassot + Carrasqueta)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "3 pieces over all levels, total length 10.2 m",
            "es": "3 piezas en todas las plantas, longitud total 10.2 m"
          },
          "count": 3,
          "length_m": 10.2,
          "kg_per_m": 22.4,
          "kg": 228.5
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 200",
          "where": {
            "en": "9 pieces over all levels, total length 27.9 m",
            "es": "9 piezas en todas las plantas, longitud total 27.9 m"
          },
          "count": 9,
          "length_m": 27.87,
          "kg_per_m": 22.4,
          "kg": 624.3
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 160",
          "where": {
            "en": "6 pieces over all levels, total length 11.6 m",
            "es": "6 piezas en todas las plantas, longitud total 11.6 m"
          },
          "count": 6,
          "length_m": 11.58,
          "kg_per_m": 15.8,
          "kg": 183.0
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 180",
          "where": {
            "en": "2 pieces over all levels, total length 5.7 m",
            "es": "2 piezas en todas las plantas, longitud total 5.7 m"
          },
          "count": 2,
          "length_m": 5.73,
          "kg_per_m": 18.8,
          "kg": 107.7
        },
        {
          "group": {
            "en": "Primary floor beams (x-direction, under cross walls)",
            "es": "Vigas principales de forjado (dirección x, bajo tabiques transversales)"
          },
          "profile": "IPE 220",
          "where": {
            "en": "1 pieces over all levels, total length 2.7 m",
            "es": "1 piezas en todas las plantas, longitud total 2.7 m"
          },
          "count": 1,
          "length_m": 2.74,
          "kg_per_m": 26.2,
          "kg": 71.8
        },
        {
          "group": {
            "en": "Party-wall edge beams / bracing struts",
            "es": "Vigas de borde de medianera / montantes de arriostramiento"
          },
          "profile": "IPE 200",
          "where": {
            "en": "12 pieces over all levels, total length 43.4 m",
            "es": "12 piezas en todas las plantas, longitud total 43.4 m"
          },
          "count": 12,
          "length_m": 43.35,
          "kg_per_m": 22.4,
          "kg": 971.0
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 160",
          "where": {
            "en": "11 pieces over all levels, total length 32.1 m",
            "es": "11 piezas en todas las plantas, longitud total 32.1 m"
          },
          "count": 11,
          "length_m": 32.14,
          "kg_per_m": 15.8,
          "kg": 507.8
        },
        {
          "group": {
            "en": "Ático roof beams",
            "es": "Vigas de cubierta del ático"
          },
          "profile": "IPE 200",
          "where": {
            "en": "1 pieces over all levels, total length 3.4 m",
            "es": "1 piezas en todas las plantas, longitud total 3.4 m"
          },
          "count": 1,
          "length_m": 3.41,
          "kg_per_m": 22.4,
          "kg": 76.4
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 9.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 9.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.09,
          "kg_per_m": 10.14,
          "kg": 92.2
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø30 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 6.11,
          "kg": 45.2
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø24 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 3.91,
          "kg": 28.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Back boundary plane y=15.05 (blind, neighbour at the rear) — 2 diagonals, total 7.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del lindero trasero y=15,05 (ciego, colindante posterior) — 2 diagonales, total 7.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 7.39,
          "kg_per_m": 1.74,
          "kg": 12.9
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 4 diagonals, total 21.4 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 4 diagonales, total 21.4 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 21.42,
          "kg_per_m": 4.94,
          "kg": 105.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø16 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 8 diagonals, total 37.2 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 8 diagonales, total 37.2 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 8,
          "length_m": 37.23,
          "kg_per_m": 1.74,
          "kg": 64.8
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Party-wall plane x=0.30 (blind wall, neighbour no. 227) — 4 diagonals, total 18.6 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano de medianera x=0,30 (paño ciego, colindante nº 227) — 4 diagonales, total 18.6 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 18.61,
          "kg_per_m": 2.72,
          "kg": 50.6
        },
        {
          "group": {
            "en": "Bracing tubes (X, tension + compression, bolted at crossing)",
            "es": "Diagonales de arriostramiento en tubo (cruz de San Andrés, tracción y compresión, atornilladas en el cruce)"
          },
          "profile": "SHS 80x80x4",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 9.7 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 9.7 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.7,
          "kg_per_m": 10.14,
          "kg": 98.4
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 8.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 8.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.13,
          "kg_per_m": 8.79,
          "kg": 71.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y=4.3 between C5 and C6 (blind wall between living room and bedroom 1 / PB bathroom; PB to P3/P2, not in the ático) — 2 diagonals, total 8.1 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y=4,3 entre C5 y C6 (paño ciego entre salón y dormitorio 1 / baño de PB; de PB a la última planta de viviendas, no en el ático) — 2 diagonales, total 8.1 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.13,
          "kg_per_m": 4.94,
          "kg": 40.2
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø36 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 9.8 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 9.8 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 9.84,
          "kg_per_m": 8.79,
          "kg": 86.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø20 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 4 diagonals, total 16.0 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 4 diagonales, total 16.0 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 4,
          "length_m": 15.98,
          "kg_per_m": 2.72,
          "kg": 43.5
        },
        {
          "group": {
            "en": "Bracing rods (X, tension-only, with turnbuckles)",
            "es": "Tirantes de arriostramiento (cruz de San Andrés, redondos con tensor)"
          },
          "profile": "Ø27 mm round bar",
          "where": {
            "en": "Cross-wall plane y≈8.1 between C8 and C9 (blind wall between bedroom 1 / bathroom and bedroom 2 on every level) — 2 diagonals, total 8.3 m (kg/m incl. +10 % turnbuckles/gussets)",
            "es": "Plano del tabique transversal y≈8,1 entre C8 y C9 (paño ciego entre dormitorio 1 / baño y dormitorio 2 en todas las plantas) — 2 diagonales, total 8.3 m (kg/m incl. +10 % tensores/cartelas)"
          },
          "count": 2,
          "length_m": 8.3,
          "kg_per_m": 4.94,
          "kg": 41.0
        },
        {
          "group": {
            "en": "Columns P2–Ático",
            "es": "Pilares P2–Ático"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13 — 13 pieces, total length 63.0 m",
            "es": "C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13 — 13 piezas, longitud total 63.0 m"
          },
          "count": 13,
          "length_m": 63.0,
          "kg_per_m": 33.7,
          "kg": 2123.1
        },
        {
          "group": {
            "en": "Columns P2–Ático",
            "es": "Pilares P2–Ático"
          },
          "profile": "HEB 120",
          "where": {
            "en": "C14, C15 — 2 pieces, total length 6.0 m",
            "es": "C14, C15 — 2 piezas, longitud total 6.0 m"
          },
          "count": 2,
          "length_m": 6.0,
          "kg_per_m": 26.7,
          "kg": 160.2
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 160",
          "where": {
            "en": "C4, C8, C9, C10, C12 — 5 pieces, total length 35.0 m",
            "es": "C4, C8, C9, C10, C12 — 5 piezas, longitud total 35.0 m"
          },
          "count": 5,
          "length_m": 35.0,
          "kg_per_m": 42.6,
          "kg": 1491.0
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 140",
          "where": {
            "en": "C1, C2, C3, C7, C11 — 5 pieces, total length 35.0 m",
            "es": "C1, C2, C3, C7, C11 — 5 piezas, longitud total 35.0 m"
          },
          "count": 5,
          "length_m": 35.0,
          "kg_per_m": 33.7,
          "kg": 1179.5
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 180",
          "where": {
            "en": "C6, C13 — 2 pieces, total length 14.0 m",
            "es": "C6, C13 — 2 piezas, longitud total 14.0 m"
          },
          "count": 2,
          "length_m": 14.0,
          "kg_per_m": 51.2,
          "kg": 716.8
        },
        {
          "group": {
            "en": "Columns PB–P1",
            "es": "Pilares PB–P1"
          },
          "profile": "HEB 200",
          "where": {
            "en": "C5 — 1 pieces, total length 7.0 m",
            "es": "C5 — 1 piezas, longitud total 7.0 m"
          },
          "count": 1,
          "length_m": 7.0,
          "kg_per_m": 61.3,
          "kg": 429.1
        },
        {
          "group": {
            "en": "Stair stringers (estimate, steps excluded)",
            "es": "Zancas de escalera (estimación, peldaños no incluidos)"
          },
          "profile": "UPN 180",
          "where": {
            "en": "12 stringers, total 38.7 m",
            "es": "12 zancas, longitud total 38.7 m"
          },
          "count": 12,
          "length_m": 38.67,
          "kg_per_m": 22.0,
          "kg": 850.7
        },
        {
          "group": {
            "en": "Connections, plates, stiffeners, bolts (+12 %)",
            "es": "Uniones, chapas, rigidizadores y tornillería (+12 %)"
          },
          "profile": "plates/bolts",
          "where": {
            "en": "Allowance on all members above",
            "es": "Repercusión sobre todos los elementos anteriores"
          },
          "count": 1,
          "length_m": 0.0,
          "kg_per_m": 0.0,
          "kg": 1424.8
        }
      ],
      "slab": {
        "type": {
          "en": "Composite steel-deck slab (forjado de chapa colaborante), 60 mm trapezoidal deck 0.8–1.0 mm, HA-25, mesh; 13 cm on every floor; propped at mid-span when concreting",
          "es": "Forjado de chapa colaborante, chapa grecada de 60 mm y 0,8–1,0 mm, HA-25, mallazo; canto 13 cm en todas las plantas; apuntalado en centro de vano durante el hormigonado"
        },
        "thickness_cm": 13,
        "area_m2": 267.2
      },
      "column_loads": [
        {
          "id": "C1",
          "N_sls_kN": 117,
          "N_uls_kN": 162
        },
        {
          "id": "C2",
          "N_sls_kN": 220,
          "N_uls_kN": 304
        },
        {
          "id": "C3",
          "N_sls_kN": 191,
          "N_uls_kN": 263
        },
        {
          "id": "C4",
          "N_sls_kN": 253,
          "N_uls_kN": 394
        },
        {
          "id": "C5",
          "N_sls_kN": 561,
          "N_uls_kN": 876
        },
        {
          "id": "C6",
          "N_sls_kN": 488,
          "N_uls_kN": 775
        },
        {
          "id": "C7",
          "N_sls_kN": 112,
          "N_uls_kN": 156
        },
        {
          "id": "C8",
          "N_sls_kN": 341,
          "N_uls_kN": 513
        },
        {
          "id": "C9",
          "N_sls_kN": 354,
          "N_uls_kN": 530
        },
        {
          "id": "C10",
          "N_sls_kN": 249,
          "N_uls_kN": 390
        },
        {
          "id": "C11",
          "N_sls_kN": 259,
          "N_uls_kN": 358
        },
        {
          "id": "C12",
          "N_sls_kN": 344,
          "N_uls_kN": 554
        },
        {
          "id": "C13",
          "N_sls_kN": 382,
          "N_uls_kN": 605
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2 → 27 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C12, C13 up to 181 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2 → 27 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C12, C13 hasta 181 kN — la absorben los micropilotes a tracción."
          }
        },
        {
          "type": {
            "en": "Alternative: shallow footings at 150 kPa (only if the geotechnical study allows)",
            "es": "Alternativa: zapatas a 150 kPa (sólo si el estudio geotécnico lo permite)"
          },
          "detail": {
            "en": "Required plan sizes: C1 0.95×0.95 m (corner); C2 1.05×1.60 m (eccentric); C3 1.20×1.20 m (corner); C4 1.15×1.75 m (eccentric); C5 2.05×2.05 m (centred); C6 1.55×2.35 m (eccentric); C7 0.75×1.15 m (eccentric); C8 1.60×1.60 m (centred); C9 1.35×2.05 m (eccentric); C10 1.15×1.75 m (eccentric); C11 1.15×1.75 m (eccentric); C12 1.60×1.60 m (corner); C13 1.70×1.70 m (corner). Only C5 and C8 can be centred footings. All perimeter columns sit 0.30 m from the party wall or 0.6 m from the retained facades, so they need eccentric party-wall / corner footings (zapatas de medianería / esquina) with strap beams (vigas centradoras). C7 and C8 are only 1.7 m apart and C8's footing is large, so they need a combined footing. The bracing columns (C5, C6, C12, C13) have net uplift under wind, so footings there would need heavy ballast or combined footings. Risks: settlement in soft clay next to old facade footings, and digging beside the neighbour's foundation (possible underpinning).",
            "es": "Dimensiones necesarias en planta: C1 0,95×0,95 m (de esquina); C2 1,05×1,60 m (medianera/fachada); C3 1,20×1,20 m (de esquina); C4 1,15×1,75 m (medianera/fachada); C5 2,05×2,05 m (centrada); C6 1,55×2,35 m (medianera/fachada); C7 0,75×1,15 m (medianera/fachada); C8 1,60×1,60 m (centrada); C9 1,35×2,05 m (medianera/fachada); C10 1,15×1,75 m (medianera/fachada); C11 1,15×1,75 m (medianera/fachada); C12 1,60×1,60 m (de esquina); C13 1,70×1,70 m (de esquina). Sólo C5 y C8 admiten zapata centrada. Todos los pilares perimetrales están a 0,30 m de la medianera o a 0,6 m de las fachadas conservadas, por lo que necesitan zapatas de medianería / esquina con vigas centradoras. C7 y C8 están a sólo 1,7 m y la zapata de C8 es grande: zapata combinada. Los pilares de arriostramiento (C5, C6, C12, C13) tienen tracción neta con viento, por lo que sus zapatas necesitarían mucho lastre o ser combinadas. Riesgos: asientos en arcillas blandas junto a la cimentación de las fachadas antiguas y excavación junto a la cimentación del colindante (posible recalce)."
          }
        },
        {
          "type": {
            "en": "Geotechnical study required",
            "es": "Estudio geotécnico obligatorio"
          },
          "detail": {
            "en": "CTE DB-SE-C requires an estudio geotécnico, typically 2–3 boreholes or penetrometer tests to ≥ 15–20 m, plus water table level and soil aggressiveness. It sets the allowable pressure, micropile length and capacity (pile load test recommended), and the slab-on-grade design.",
            "es": "El CTE DB-SE-C exige estudio geotécnico, normalmente 2–3 sondeos o penetrómetros hasta ≥ 15–20 m, con nivel freático y agresividad del terreno. Fija la tensión admisible, la longitud y capacidad de los micropilotes (se recomienda prueba de carga) y la solera."
          }
        }
      ],
      "fire": {
        "en": "Evacuation height = ático floor level = 10.0 m (≤ 14 m → unprotected stair allowed, DB-SI SI3 Table 5.1; ≤ 15 m → residential structure R60, SI6 Table 3.1). The whole building is Residencial Vivienda (PB is a flat too), so there is no other-use fire sector and the structure is R60 throughout, including the PB columns and the P1 floor. 13 cm slabs give h_eff ≈ 92 mm ≥ 80 mm (R60, EN 1994-1-2). Steel protected with intumescent paint (R60).",
        "es": "Altura de evacuación = cota del suelo del ático = 10,0 m (≤ 14 m → se admite escalera no protegida, DB-SI SI3 Tabla 5.1; ≤ 15 m → estructura residencial R60, SI6 Tabla 3.1). Todo el edificio es Residencial Vivienda (la PB también es vivienda), por lo que no hay sector de otro uso y la estructura es R60 en su totalidad, incluidos los pilares de PB y el forjado de P1. Forjados de 13 cm: h_eff ≈ 92 mm ≥ 80 mm (R60, UNE-EN 1994-1-2). Acero protegido con pintura intumescente (R60)."
      },
      "totals": {
        "steel_kg": 13298.1,
        "steel_kg_m2": 43.6,
        "cost_eur_low": 104700.0,
        "cost_eur_high": 160800.0,
        "cost_per_home_low": 26200.0,
        "cost_per_home_high": 40200.0
      },
      "checks": [
        {
          "item": {
            "en": "Composite slab: max span / depth",
            "es": "Forjado colaborante: luz máxima / canto"
          },
          "value": "3.90 m / 0.13 m = 30 ≤ 32 (EC4 guidance); propped at mid-span when concreting",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: max utilisation (bending + strut axial / shear / deflection)",
            "es": "Vigas: aprovechamiento máximo (flexión + axil de montante / cortante / flecha)"
          },
          "value": "0.96 — B2 IPE 200 at P1",
          "ok": true
        },
        {
          "item": {
            "en": "Beams: active deflection (worst ratio to limit)",
            "es": "Vigas: flecha activa (peor relación con el límite)"
          },
          "value": "7.7 mm vs 8.1 mm — B2 IPE 200",
          "ok": true
        },
        {
          "item": {
            "en": "Columns: max N_Ed / Nb,Rd (weak axis, Lcr = storey height)",
            "es": "Pilares: N_Ed / Nb,Rd máximo (eje débil, Lcr = altura de planta)"
          },
          "value": "0.85 ≤ 0.85 — C6 HEB 180, storey PB",
          "ok": true
        },
        {
          "item": {
            "en": "Bracing diagonals: max utilisation (rods tension-only, SHS tension + compression)",
            "es": "Diagonales de arriostramiento: aprovechamiento máximo (redondos sólo tracción, tubos tracción y compresión)"
          },
          "value": "0.95",
          "ok": true
        },
        {
          "item": {
            "en": "Lateral drift under characteristic wind",
            "es": "Desplome con viento característico"
          },
          "value": "top 23.6 mm ≤ H/500 = 26.0 mm; worst storey 60 % of h/250",
          "ok": true
        },
        {
          "item": {
            "en": "Seismic NCSE-02",
            "es": "Sismo NCSE-02"
          },
          "value": "not mandatory (ab 0.06g < 0.08g, normal importance, braced both ways, < 7 storeys); indicative Vs ≈ 255 kN vs ULS wind x 254 kN / y 110 kN — if applied voluntarily it would govern the party-wall (y) bracing",
          "ok": true
        },
        {
          "item": {
            "en": "Uplift at bracing columns (characteristic)",
            "es": "Tracción en pilares de arriostramiento (característica)"
          },
          "value": "max 181 kN → micropiles in tension",
          "ok": true
        },
        {
          "item": {
            "en": "Headroom: 3.0 m floor-to-floor",
            "es": "Altura libre: 3,0 m entre forjados"
          },
          "value": "3.00 − 0.13 slab − 0.07 finishes = 2.80 m clear; beams ≤ 300 mm sit in cross walls",
          "ok": true
        },
        {
          "item": {
            "en": "Fire resistance",
            "es": "Resistencia al fuego"
          },
          "value": "R60 throughout, residential only (h_evac 10.0 m ≤ 15 m); no other-use sector",
          "ok": true
        },
        {
          "item": {
            "en": "Accessibility between floors (CTE DB-SUA 9 §1.1.2)",
            "es": "Accesibilidad entre plantas (CTE DB-SUA 9 §1.1.2)"
          },
          "value": "no lift: 3 floors to climb from the entrance to the ático (> 2) → accessible lift required; does not comply",
          "ok": false
        }
      ],
      "core": {
        "stair": [
          0.15,
          2.1,
          12.85,
          15.15
        ],
        "stair_run_end": null,
        "lift": null,
        "core_y": 11.4
      }
    }
  },
  "comparison": [
    {
      "metric": {
        "en": "Storeys",
        "es": "Plantas"
      },
      "A": "PB + 3 + ático",
      "B": "PB + 2 + ático",
      "better": "same"
    },
    {
      "metric": {
        "en": "Cornice / top height",
        "es": "Altura de cornisa / coronación"
      },
      "A": "13.0 m / 16.0 m",
      "B": "10.0 m / 13.0 m",
      "better": "same"
    },
    {
      "metric": {
        "en": "Homes",
        "es": "Viviendas"
      },
      "A": "5 (4 two-bed flats PB–P3 + ático studio)",
      "B": "4 (3 two-bed flats PB–P2 + ático studio)",
      "better": "A"
    },
    {
      "metric": {
        "en": "Built area",
        "es": "Superficie construida"
      },
      "A": "390 m²",
      "B": "305 m²",
      "better": "A"
    },
    {
      "metric": {
        "en": "Structural steel",
        "es": "Acero estructural"
      },
      "A": "20,317 kg",
      "B": "14,637 kg",
      "better": "B"
    },
    {
      "metric": {
        "en": "Steel per m² built",
        "es": "Acero por m² construido"
      },
      "A": "52.0 kg/m²",
      "B": "48.0 kg/m²",
      "better": "B"
    },
    {
      "metric": {
        "en": "Column sizes at base (PB)",
        "es": "Pilares en planta baja"
      },
      "A": "HEB 140 – HEB 220",
      "B": "HEB 140 – HEB 200",
      "better": "B"
    },
    {
      "metric": {
        "en": "Largest column load at foundation (SLS / ULS)",
        "es": "Mayor carga de pilar en cimentación (ELS / ELU)"
      },
      "A": "792 / 1216 kN",
      "B": "538 / 838 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Typical gravity-only column, C2 behind the pilaster (SLS / ULS)",
        "es": "Pilar tipo sólo gravitatorio, C2 tras la pilastra (ELS / ELU)"
      },
      "A": "287 / 397 kN",
      "B": "208 / 288 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Total load on foundations (SLS)",
        "es": "Carga total en cimentación (ELS)"
      },
      "A": "5,611 kN",
      "B": "3,880 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Foundations (recommended)",
        "es": "Cimentación (recomendada)"
      },
      "A": "38 micropiles Ø150–200 + caps + tie beams",
      "B": "33 micropiles Ø150–200 + caps + tie beams",
      "better": "B"
    },
    {
      "metric": {
        "en": "Fire rating",
        "es": "Resistencia al fuego"
      },
      "A": "R60 throughout (h_evac 13.0 m ≤ 15 m)",
      "B": "R60 throughout (h_evac 10.0 m ≤ 15 m)",
      "better": "same"
    },
    {
      "metric": {
        "en": "Stair",
        "es": "Escalera"
      },
      "A": "unprotected allowed (13.0 ≤ 14 m, tight margin)",
      "B": "unprotected allowed (10.0 ≤ 14 m)",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost range (steel + fire protection + slabs + foundations)",
        "es": "Coste de estructura (acero + protección al fuego + forjados + cimentación)"
      },
      "A": "147,400 – 226,200 €",
      "B": "116,500 – 178,800 €",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost per home",
        "es": "Coste de estructura por vivienda"
      },
      "A": "29,500 – 45,200 €",
      "B": "29,100 – 44,700 €",
      "better": "same"
    },
    {
      "metric": {
        "en": "Structure cost per m² built",
        "es": "Coste de estructura por m² construido"
      },
      "A": "378 – 579 €/m²",
      "B": "382 – 586 €/m²",
      "better": "same"
    },
    {
      "metric": {
        "en": "Planning (urban report)",
        "es": "Urbanismo (informe urbanístico)"
      },
      "A": "within 'Número de plantas 4' (PB+3) + ático",
      "B": "within 'Número de plantas 4'; confirm building one storey below the maximum is permitted",
      "better": "same"
    }
  ],
  "comparison0": [
    {
      "metric": {
        "en": "Storeys",
        "es": "Plantas"
      },
      "A": "PB + 3 + ático",
      "B": "PB + 2 + ático",
      "better": "same"
    },
    {
      "metric": {
        "en": "Cornice / top height",
        "es": "Altura de cornisa / coronación"
      },
      "A": "13.0 m / 16.0 m",
      "B": "10.0 m / 13.0 m",
      "better": "same"
    },
    {
      "metric": {
        "en": "Homes",
        "es": "Viviendas"
      },
      "A": "5 (4 two-bed flats PB–P3 + ático studio)",
      "B": "4 (3 two-bed flats PB–P2 + ático studio)",
      "better": "A"
    },
    {
      "metric": {
        "en": "Built area",
        "es": "Superficie construida"
      },
      "A": "390 m²",
      "B": "305 m²",
      "better": "A"
    },
    {
      "metric": {
        "en": "Structural steel",
        "es": "Acero estructural"
      },
      "A": "18,234 kg",
      "B": "13,298 kg",
      "better": "B"
    },
    {
      "metric": {
        "en": "Steel per m² built",
        "es": "Acero por m² construido"
      },
      "A": "46.7 kg/m²",
      "B": "43.6 kg/m²",
      "better": "B"
    },
    {
      "metric": {
        "en": "Column sizes at base (PB)",
        "es": "Pilares en planta baja"
      },
      "A": "HEB 140 – HEB 220",
      "B": "HEB 140 – HEB 200",
      "better": "B"
    },
    {
      "metric": {
        "en": "Largest column load at foundation (SLS / ULS)",
        "es": "Mayor carga de pilar en cimentación (ELS / ELU)"
      },
      "A": "821 / 1262 kN",
      "B": "561 / 876 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Typical gravity-only column, C2 behind the pilaster (SLS / ULS)",
        "es": "Pilar tipo sólo gravitatorio, C2 tras la pilastra (ELS / ELU)"
      },
      "A": "302 / 418 kN",
      "B": "220 / 304 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Total load on foundations (SLS)",
        "es": "Carga total en cimentación (ELS)"
      },
      "A": "5,639 kN",
      "B": "3,871 kN",
      "better": "B"
    },
    {
      "metric": {
        "en": "Foundations (recommended)",
        "es": "Cimentación (recomendada)"
      },
      "A": "34 micropiles Ø150–200 + caps + tie beams",
      "B": "27 micropiles Ø150–200 + caps + tie beams",
      "better": "B"
    },
    {
      "metric": {
        "en": "Fire rating",
        "es": "Resistencia al fuego"
      },
      "A": "R60 throughout (h_evac 13.0 m ≤ 15 m)",
      "B": "R60 throughout (h_evac 10.0 m ≤ 15 m)",
      "better": "same"
    },
    {
      "metric": {
        "en": "Stair",
        "es": "Escalera"
      },
      "A": "unprotected allowed (13.0 ≤ 14 m, tight margin)",
      "B": "unprotected allowed (10.0 ≤ 14 m)",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost range (steel + fire protection + slabs + foundations)",
        "es": "Coste de estructura (acero + protección al fuego + forjados + cimentación)"
      },
      "A": "136,000 – 208,700 €",
      "B": "104,700 – 160,800 €",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost per home",
        "es": "Coste de estructura por vivienda"
      },
      "A": "27,200 – 41,700 €",
      "B": "26,200 – 40,200 €",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost per m² built",
        "es": "Coste de estructura por m² construido"
      },
      "A": "349 – 535 €/m²",
      "B": "343 – 527 €/m²",
      "better": "same"
    },
    {
      "metric": {
        "en": "Planning (urban report)",
        "es": "Urbanismo (informe urbanístico)"
      },
      "A": "within 'Número de plantas 4' (PB+3) + ático",
      "B": "within 'Número de plantas 4'; confirm building one storey below the maximum is permitted",
      "better": "same"
    },
    {
      "metric": {
        "en": "Lift / accessibility (CTE DB-SUA 9 §1.1.2)",
        "es": "Ascensor / accesibilidad (CTE DB-SUA 9 §1.1.2)"
      },
      "A": "no lift — 4 floors to climb to the ático: does NOT comply (lift required)",
      "B": "no lift — 3 floors to climb to the ático: does NOT comply (lift required)",
      "better": "same"
    }
  ],
  "lift_compare": [
    {
      "metric": {
        "en": "Lift",
        "es": "Ascensor"
      },
      "A": "yes — accessible lift, 5 stops (PB–ático)",
      "A0": "no — shaft area becomes a storage cupboard on each floor",
      "B": "yes — accessible lift, 4 stops (PB–ático)",
      "B0": "no — shaft area becomes a storage cupboard on each floor"
    },
    {
      "metric": {
        "en": "Structural steel",
        "es": "Acero estructural"
      },
      "A": "20,317 kg",
      "A0": "18,234 kg",
      "B": "14,637 kg",
      "B0": "13,298 kg"
    },
    {
      "metric": {
        "en": "Structure cost (steel + fire + slabs + foundations)",
        "es": "Coste de estructura (acero + fuego + forjados + cimentación)"
      },
      "A": "147,400 – 226,200 €",
      "A0": "136,000 – 208,700 €",
      "B": "116,500 – 178,800 €",
      "B0": "104,700 – 160,800 €"
    },
    {
      "metric": {
        "en": "Structure cost difference with lift (vs. no lift)",
        "es": "Diferencia de coste de estructura con ascensor (frente a sin ascensor)"
      },
      "A": "+11,400 – 17,500 € vs A0 (new core: 3 extra core columns, trimmers, stiffer back plane)",
      "A0": "—",
      "B": "+11,800 – 18,000 € vs B0 (new core: 3 extra core columns, trimmers)",
      "B0": "—"
    },
    {
      "metric": {
        "en": "Lift equipment, supplied and installed (assumed 2026 range)",
        "es": "Ascensor: suministro e instalación (rango supuesto 2026)"
      },
      "A": "28,000 – 40,000 €",
      "A0": "0 €",
      "B": "25,000 – 36,000 €",
      "B0": "0 €"
    },
    {
      "metric": {
        "en": "Builder's work for the lift (pit, shaft enclosure, power, finishes)",
        "es": "Obra asociada al ascensor (foso, cerramiento del hueco, acometida, remates)"
      },
      "A": "6,000 – 12,000 €",
      "A0": "0 €",
      "B": "6,000 – 12,000 €",
      "B0": "0 €"
    },
    {
      "metric": {
        "en": "Total extra investment for having a lift",
        "es": "Inversión adicional total por tener ascensor"
      },
      "A": "45,400 – 69,500 €",
      "A0": "0 €",
      "B": "42,800 – 66,000 €",
      "B0": "0 €"
    },
    {
      "metric": {
        "en": "Lift investment per home",
        "es": "Inversión en ascensor por vivienda"
      },
      "A": "9,080 – 13,900 €",
      "A0": "0 €",
      "B": "10,700 – 16,500 €",
      "B0": "0 €"
    },
    {
      "metric": {
        "en": "Yearly lift maintenance + periodic inspections (assumed)",
        "es": "Mantenimiento anual + inspecciones periódicas (supuesto)"
      },
      "A": "1,500 – 3,000 €/year",
      "A0": "0 €/year",
      "B": "1,500 – 3,000 €/year",
      "B0": "0 €/year"
    },
    {
      "metric": {
        "en": "Core layout",
        "es": "Distribución del núcleo"
      },
      "A": "new with-lift core from y = 10.15 (lift beside the landing)",
      "A0": "old core from y = 11.40, no lift",
      "B": "new with-lift core from y = 10.15 (lift beside the landing)",
      "B0": "old core from y = 11.40, no lift"
    },
    {
      "metric": {
        "en": "Usable area of each 2-bed flat (approx.)",
        "es": "Superficie útil de cada vivienda de 2 dormitorios (aprox.)"
      },
      "A": "≈ 65.5 m²",
      "A0": "≈ 71 m² (+ ≈ 5.5 m²)",
      "B": "≈ 65.5 m²",
      "B0": "≈ 71 m² (+ ≈ 5.5 m²)"
    },
    {
      "metric": {
        "en": "Ático studio",
        "es": "Estudio del ático"
      },
      "A": "≈ 4.5 m² smaller than without lift",
      "A0": "reference",
      "B": "≈ 4.5 m² smaller than without lift",
      "B0": "reference"
    },
    {
      "metric": {
        "en": "Usable area gained without lift (flats + studio + storage cupboards)",
        "es": "Superficie útil ganada sin ascensor (viviendas + estudio + trasteros)"
      },
      "A": "—",
      "A0": "≈ 4 × 5.5 + 4.5 + 1.32 × 5 ≈ 33 m²",
      "B": "—",
      "B0": "≈ 3 × 5.5 + 4.5 + 1.32 × 4 ≈ 26 m²"
    },
    {
      "metric": {
        "en": "Stair",
        "es": "Escalera"
      },
      "A": "code-size treads (2 × 8 × 0.28 m); PB flight to be extended",
      "A0": "old U-stair (not re-checked)",
      "B": "code-size treads (2 × 8 × 0.28 m); PB flight to be extended",
      "B0": "old U-stair (not re-checked)"
    },
    {
      "metric": {
        "en": "Climb from the entrance to the ático",
        "es": "Subida desde la entrada al ático"
      },
      "A": "by lift",
      "A0": "13.0 m ≈ 74 steps on foot",
      "B": "by lift",
      "B0": "10.0 m ≈ 57 steps on foot"
    },
    {
      "metric": {
        "en": "Accessibility (CTE DB-SUA 9 §1.1.2)",
        "es": "Accesibilidad (CTE DB-SUA 9 §1.1.2)"
      },
      "A": "complies (accessible lift)",
      "A0": "does NOT comply: 4 floors to climb > 2 → lift required",
      "B": "complies (accessible lift)",
      "B0": "does NOT comply: 3 floors to climb > 2 → lift required"
    },
    {
      "metric": {
        "en": "If no lift now: shaft reserved for a future lift (new core framed + pit + removable infill)",
        "es": "Si no se pone ahora: hueco reservado para ascensor futuro (núcleo nuevo enmarcado + foso + cierre desmontable)"
      },
      "A": "—",
      "A0": "+ 16,400 – 26,000 €; cupboards usable until the lift is fitted; still NOT compliant for a new building",
      "B": "—",
      "B0": "+ 16,400 – 25,800 €; cupboards usable until the lift is fitted; still NOT compliant for a new building"
    }
  ],
  "lift_warnings": [
    {
      "en": "Accessibility decides this, not the structure. CTE DB-SUA 9 §1.1.2 (current text with the Ministry's comments; wording checked) requires an accessible lift (or accessible ramp) in a Residencial Vivienda building where more than two floors must be climbed from an accessible main entrance to any dwelling. The Ministry's comment gives 'planta baja + 3' as an example where it is required. A0 has 4 floors to climb to the ático (P1, P2, P3, ático) and B0 has 3 (P1, P2, ático). Neither no-lift option complies, and a building licence would very likely be refused.",
      "es": "Lo decisivo es la accesibilidad, no la estructura. El CTE DB-SUA 9 §1.1.2 (texto vigente con comentarios del Ministerio; redacción comprobada) exige ascensor accesible (o rampa accesible) en edificios de Residencial Vivienda en los que haya que salvar más de dos plantas desde una entrada principal accesible hasta alguna vivienda. El comentario del Ministerio pone 'planta baja + 3' como ejemplo en que es obligatorio. A0 obliga a salvar 4 plantas hasta el ático (P1, P2, P3, ático) y B0, 3 (P1, P2, ático). Ninguna de las dos opciones sin ascensor cumple, y lo más probable es que no obtenga licencia."
    },
    {
      "en": "The CTE's only exception does not apply here. When at most two floors must be climbed, the project only has to provide for a future lift 'dimensionally and structurally' (a reserved shaft). That would be planta baja + 2 with no ático, not B0. Storage rooms and drying areas do not count as floors, but the ático is a dwelling, so it counts.",
      "es": "La única excepción del CTE no aplica: si sólo hay que salvar dos plantas o menos, basta con 'prever dimensional y estructuralmente' el ascensor (hueco reservado). Eso sería planta baja + 2 sin ático, no B0. Trasteros y tendederos no cuentan como plantas, pero el ático es una vivienda y sí cuenta."
    },
    {
      "en": "Valencian rules apply on top of the CTE and cannot be less demanding. They are Decreto 65/2019 on accessibility in buildings (arts. 7 and 16, 'accesibilidad entre plantas'), the housing design and quality rules (Decreto 80/2023, which replaced DC-09) and Ley 8/2024 on universal accessibility. Their exact wording was not verified in this study: the architect must check it, and it may require more (e.g. wheelchair-accessible dwellings).",
      "es": "La normativa valenciana se suma al CTE y no puede ser menos exigente: Decreto 65/2019 de accesibilidad en la edificación (arts. 7 y 16, 'accesibilidad entre plantas'), las normas de diseño y calidad de vivienda (Decreto 80/2023, que sustituyó a la DC-09) y la Ley 8/2024 de accesibilidad universal. Su redacción exacta no se ha comprobado en este estudio; debe verificarla el arquitecto, y puede exigir más (p. ej. viviendas accesibles para silla de ruedas)."
    },
    {
      "en": "The 'flexibility' or 'reasonable adjustments' allowed for existing buildings will almost certainly not help. Only the façades are kept; the structure, floors and layout are new, and the shaft fits in the plan. The Ayuntamiento is likely to treat this as new construction. Do not count on an exemption without a written prior opinion from the Ayuntamiento.",
      "es": "La 'flexibilidad' o los 'ajustes razonables' para edificios existentes casi seguro no servirán: sólo se conservan las fachadas, la estructura, los forjados y la distribución son nuevos, y el hueco cabe en planta. El Ayuntamiento previsiblemente lo tratará como obra nueva. No contar con una exención sin un informe previo por escrito del Ayuntamiento."
    },
    {
      "en": "The with-lift options use the redesigned core, so the structures differ more than the shaft alone. A has 20,317 kg of steel against 18,234 kg for A0; B has 14,637 kg against 13,298 kg for B0. The with-lift core needs three extra core columns (C16–C18), more trimmers and more micropiles (A 38 vs A0 34; B 33 vs B0 27). The structural extra is small next to the lift itself: about 31–52 k€ to install (equipment plus builder's work) and 1.5–3 k€ per year.",
      "es": "Las opciones con ascensor usan el núcleo rediseñado, así que las estructuras difieren algo más que por el hueco: A tiene 20.317 kg de acero frente a 18.234 kg de A0, y B 14.637 kg frente a 13.298 kg de B0. El núcleo con ascensor necesita tres pilares más (C16–C18), más brochales y más micropilotes (A 38 frente a A0 34; B 33 frente a B0 27). Ese sobrecoste estructural es pequeño frente al propio ascensor: unos 31–52 k€ de instalación (equipo + obra asociada) y 1,5–3 k€ al año."
    },
    {
      "en": "If the owner still wants to postpone the lift, at least reserve the shaft:\n- Frame the structure exactly as in A/B (new core).\n- Build the lift pit now with the foundations; it is very hard to add later under the slab and pile caps.\n- Close the opening on each floor with a removable infill, so it works as a storage cupboard meanwhile.\n- Leave the power supply ready.\nIt costs about the structural difference of the new core plus the pit and the infills (see lift_compare), and the flats keep the smaller with-lift layout. It still does NOT make A0/B0 compliant as new buildings.",
      "es": "Si aun así se quiere aplazar el ascensor, como mínimo reservar el hueco:\n- Estructura exactamente como A/B (núcleo nuevo).\n- Foso construido ahora con la cimentación (muy difícil de hacer después bajo solera y encepados).\n- Cierre desmontable en cada planta, usable mientras tanto como trastero.\n- Acometida eléctrica prevista.\nCuesta aproximadamente la diferencia estructural del núcleo nuevo más el foso y los cierres (ver lift_compare), y las viviendas quedan con la distribución con ascensor, más pequeña. Aun así NO hace que A0/B0 cumplan como edificio nuevo."
    },
    {
      "en": "Without a lift, no flat above planta baja (including the ático and its terrace) is reachable for people with reduced mobility, and sale and rental values fall. Adding a lift later in a divided building needs a community agreement (Ley de Propiedad Horizontal) and costs more.",
      "es": "Sin ascensor, ninguna vivienda por encima de planta baja (ni el ático ni su terraza) es accesible para personas con movilidad reducida, y baja el valor de venta y alquiler. Instalarlo después en un edificio en propiedad horizontal exige acuerdo de la comunidad y cuesta más."
    }
  ],
  "procedure": [
    {
      "title": {
        "en": "1. Surveys and permits",
        "es": "1. Estudios previos y licencias"
      },
      "text": {
        "en": "Geotechnical study (boreholes to ≥ 15–20 m, water table). Condition survey of both retained facades: thickness, mortar, cracks, foundation depth via trial pits. Photographic record of neighbour no. 227 and the rear neighbour (acta notarial). Demolition and building licence. Street-occupation permit (ocupación de vía pública) if the facade stabiliser stands on the pavement.",
        "es": "Estudio geotécnico (sondeos hasta ≥ 15–20 m, nivel freático). Inspección de las dos fachadas conservadas: espesor, morteros, grietas y profundidad de cimentación con calicatas. Reportaje del estado del colindante nº 227 y del trasero (acta notarial). Licencia de derribo y de obra. Permiso de ocupación de vía pública si el estabilizador de fachada apoya en la acera."
      }
    },
    {
      "title": {
        "en": "2. Facade stabiliser",
        "es": "2. Estabilizador de fachada"
      },
      "text": {
        "en": "Before any demolition, install an external (street-side) or internal steel stabiliser on both façades. Use towers on ballast or micropile bases, with walers through the window openings and spaced 2–3 m vertically. Shore and frame the openings (cercos/apeos), and protect the cornice. The corner gets a 3D tower. Install monitoring targets (topography) on the façades and on the neighbour.",
        "es": "Antes de cualquier derribo, montar estabilizador metálico exterior (en vía pública) o interior en ambas fachadas: torres sobre lastre o micropilotes, con vigas de atado (carreras) pasantes por los huecos cada 2–3 m de altura. Apear y enmarcar los huecos (cercos/apeos) y proteger la cornisa; torre tridimensional en la esquina. Colocar dianas de control topográfico en fachadas y colindante."
      }
    },
    {
      "title": {
        "en": "3. Controlled demolition",
        "es": "3. Derribo controlado"
      },
      "text": {
        "en": "Strip out by hand, top-down: roof, then floors one by one, then interior walls. Remove the old floor beams from the façade pockets without hammering the façades. Do not load the party wall. Keep the party wall braced if it loses restraint (temporary shores against the neighbour's wall face, agreed with the neighbour). Fill or repair the façade beam pockets.",
        "es": "Derribo manual y de arriba abajo: cubierta, forjados uno a uno y muros interiores. Extraer las viguetas de los mechinales de fachada sin golpearla. No cargar la medianera; si pierde arriostramiento, apuntalarla provisionalmente (de acuerdo con el colindante). Rellenar/reparar los mechinales."
      }
    },
    {
      "title": {
        "en": "4. Foundations",
        "es": "4. Cimentación"
      },
      "text": {
        "en": "Drill micropiles with a small rig (party-wall side first), then pile caps and 40×50 tie beams. Never dig below the depth of the old façade footings close to them without underpinning (recalce) in short alternate bays. Cast the anchor bolts with templates (tolerance ±5 mm). Lay the slab on grade (solera) of PB later.",
        "es": "Perforación de micropilotes con maquinaria pequeña (primero junto a medianera), encepados y vigas de atado de 40×50. No excavar bajo la cota de cimentación de las fachadas antiguas junto a ellas sin recalce por bataches alternos. Pernos de anclaje con plantilla (tolerancia ±5 mm). Solera de PB al final."
      }
    },
    {
      "title": {
        "en": "5. Steel erection",
        "es": "5. Montaje de la estructura metálica"
      },
      "text": {
        "en": "Columns are spliced every two storeys (bolted end-plate or cover-plate splice about 0.5 m above the floor). Erect column by column with temporary bracing until the X-bracing in the party-wall, cross-wall and back planes is installed and tensioned. Use a mobile crane from Av. Burjassot or C/ Carrasqueta, which needs a street permit. Level the base plates on wedges, then grout with non-shrink mortar.",
        "es": "Pilares empalmados cada dos plantas (empalme atornillado con chapa frontal o cubrejuntas ~0,5 m sobre forjado). Montaje pilar a pilar con arriostramiento provisional hasta colocar y tensar las cruces de los planos de medianera, transversal y trasero. Grúa móvil desde Av. Burjassot o C/ Carrasqueta (permiso de vía pública). Placas de anclaje niveladas con cuñas y retacado con mortero sin retracción."
      }
    },
    {
      "title": {
        "en": "6. Connections",
        "es": "6. Uniones"
      },
      "text": {
        "en": "All site connections are bolted (8.8 bolts): fin plates or double angles at simple beam-to-column joints, and gusset plates for bracing rods with turnbuckles. Welding is done in the workshop only, to EXC2 per UNE-EN 1090-2, with a CE-marked fabricator. Shear studs on the beams are optional (composite action would reduce beam sizes).",
        "es": "Uniones en obra atornilladas (tornillos 8.8): casquillos o chapa de alma en uniones articuladas viga-pilar; cartelas para tirantes con tensor. Soldadura sólo en taller, clase de ejecución EXC2 según UNE-EN 1090-2, taller con marcado CE. Conectadores en vigas opcionales (la acción mixta reduciría las vigas)."
      }
    },
    {
      "title": {
        "en": "7. Composite slabs",
        "es": "7. Forjados de chapa colaborante"
      },
      "text": {
        "en": "Lay and fix the deck (shot-fired pins or studs), with edge trims and one line of props at mid-span. Fit the mesh and the top bars over the beams, then cast HA-25 floor by floor, bottom-up, and cure. Remove the props when the concrete reaches about 70 % of its strength. The slab acts as the horizontal diaphragm that carries wind to the bracing.",
        "es": "Colocación y fijación de chapa (clavos o conectadores), remates de borde, una sopanda de apuntalamiento en centro de vano. Mallazo y negativos sobre vigas, hormigonado HA-25 planta a planta de abajo arriba y curado. Desapuntalar con ~70 % de resistencia. El forjado actúa como diafragma que lleva el viento a las cruces."
      }
    },
    {
      "title": {
        "en": "8. Façade ties (lateral only)",
        "es": "8. Atado de fachadas (sólo horizontal)"
      },
      "text": {
        "en": "Connect the retained façades to the new slab edges at P1 and P2 (+4.0, +7.0) and with a crown tie at the top of the retained wall, after the old cornice is dismantled. Use stainless-steel ties or chemical anchors about every 1.5 m, each designed for about 5–10 kN (ULS) and confirmed by pull-out tests on site. The ties carry horizontal load only: give them vertically slotted holes so frame shortening and settlement never load the old masonry. The new upper façade and the rebuilt cornice are carried by the new frame (slab-edge cantilever or steel angles at each floor), never by the crown of the old wall. Remove the stabiliser only after the ties and slabs are complete.",
        "es": "Unir las fachadas conservadas a los bordes de forjado en P1 y P2 (+4,0; +7,0) y con un atado de coronación en la cabeza del muro conservado, una vez desmontada la cornisa antigua: anclajes inoxidables o químicos cada ~1,5 m, ~5–10 kN (ELU) cada uno, confirmados con ensayos de arrancamiento in situ. Los anclajes sólo transmiten esfuerzo horizontal: con colisos verticales, para que el acortamiento y los asientos de la estructura nueva nunca carguen la fábrica antigua. La fachada nueva superior y la cornisa rehecha apoyan en la estructura nueva (vuelo del borde de forjado o angulares en cada planta), nunca en la coronación del muro antiguo. Retirar el estabilizador sólo con atados y forjados terminados."
      }
    },
    {
      "title": {
        "en": "9. Fire protection (CTE DB-SI)",
        "es": "9. Protección contra incendios (CTE DB-SI)"
      },
      "text": {
        "en": "Residential structure R60 throughout (evacuation height ≤ 15 m in both options; PB is also a flat, so there is no other-use sector). Intumescent paint certified for the profile section factors (Am/V), or gypsum boards on the columns. Façade-zone beams must be protected before the cladding closes them in.",
        "es": "Estructura residencial R60 en su totalidad (altura de evacuación ≤ 15 m en ambas opciones; la PB también es vivienda, sin sector de otro uso). Pintura intumescente certificada para la masividad (Am/V) de cada perfil, o placas de yeso en pilares. Proteger antes de cerrar las zonas de fachada."
      }
    },
    {
      "title": {
        "en": "10. Corrosion protection",
        "es": "10. Protección frente a la corrosión"
      },
      "text": {
        "en": "Interior steel (class C2): grit blast Sa 2½, then an epoxy primer compatible with the intumescent coating, about 80 µm. Steel in façade cavities, ties and the roof-terrace edge (C3–C4, near the coast): hot-dip galvanising or a C4 paint system. Column bases sit above the floor finish, or are encased in concrete.",
        "es": "Acero interior (clase C2): chorreado Sa 2½ + imprimación epoxi compatible con la intumescente (~80 µm). Acero en cámara de fachada, anclajes y borde de cubierta (C3–C4, cercanía al mar): galvanizado en caliente o sistema C4. Basas de pilares por encima del pavimento o embebidas en hormigón."
      }
    },
    {
      "title": {
        "en": "11. Tolerances and quality control",
        "es": "11. Tolerancias y control de calidad"
      },
      "text": {
        "en": "Use UNE-EN 1090-2 erection tolerances: column out-of-plumb ≤ h/300 per storey and ≤ H/500 overall, and anchor bolts ±5 mm. Check bolt tightening and weld inspection (VT plus MT sampling), and keep the material certificates (3.1). The Código Estructural requires a quality control plan, signed by the Dirección Facultativa.",
        "es": "Tolerancias de montaje según UNE-EN 1090-2: desplome de pilar ≤ h/300 por planta y ≤ H/500 total; pernos ±5 mm. Control de apriete de tornillos e inspección de soldaduras (VT + muestreo MT); certificados de materiales 3.1. Plan de control de calidad según Código Estructural, firmado por la Dirección Facultativa."
      }
    }
  ],
  "warnings": [
    {
      "en": "Pre-dimensioning only. All sizes, loads and costs must be verified by a licensed structural engineer / architect with a full 3D model, connection design and an estudio geotécnico before any licence or tender.",
      "es": "Sólo predimensionado. Todas las dimensiones, cargas y costes deben ser comprobados por técnico competente (arquitecto / ingeniero de estructuras) con modelo 3D completo, cálculo de uniones y estudio geotécnico, antes de licencia o licitación."
    },
    {
      "en": "Both options are within the urban report ('Número de plantas 4'). For Option B (PB + 2 + ático) simply confirm with the Ayuntamiento that building one storey below the maximum is permitted.",
      "es": "Ambas opciones cumplen el informe urbanístico ('Número de plantas 4'). Para la Opción B (PB + 2 + ático) basta confirmar con el Ayuntamiento que se admite construir una planta menos que el máximo."
    },
    {
      "en": "Option A: the evacuation height of 13.0 m is close to the 14 m limit for an unprotected stair. If finished levels rise by more than about 1 m, a protected stair is required.",
      "es": "Opción A: la altura de evacuación de 13,0 m está cerca del límite de 14 m para escalera no protegida; si las cotas de acabado suben más de ~1 m, será obligatoria escalera protegida."
    },
    {
      "en": "A0/B0 (old core): columns C12 (back corner of the stair landing) and C10 (in front of the old lift position) need about 20 cm of coordination with the core. The stair currently starts 0.15 m from the party wall.",
      "es": "A0/B0 (núcleo antiguo): los pilares C12 (esquina trasera del rellano) y C10 (delante de la antigua posición del ascensor) requieren ~20 cm de coordinación con el núcleo; la escalera arranca hoy a 0,15 m de la medianera."
    },
    {
      "en": "The X-bracing planes must be blind walls on every level. In A/B (new core) they are: the party wall (C4–C7–C10); the cross wall y = 4.0 between C5 and C6 (living room | bedroom 1, PB living room | bathroom); the cross wall y = 7.9 between C8 and C9 (bathroom | bedroom 2, PB bedroom 1 | bedroom 2); and the back boundary C12–C13 behind the half-landing. Checked against the new walls: the doors are on the hall wall x = 1.25 and the flat door is on y = 10.15 (x 0.2–1.05), so none falls in a braced bay. In A0/B0 (old core) the planes are y = 4.3 (C5–C6), y ≈ 8.1 (C8–C9) and the back boundary, with the same door check. Any door added later in a braced bay needs a K-brace or a portal frame instead.",
      "es": "Los planos arriostrados deben ser paños ciegos en todas las plantas. En A/B (núcleo nuevo) son: la medianera (C4–C7–C10); el tabique y = 4,0 entre C5 y C6 (salón | dormitorio 1; en PB salón | baño); el tabique y = 7,9 entre C8 y C9 (baño | dormitorio 2; en PB dormitorio 1 | dormitorio 2); y el lindero trasero C12–C13 detrás de la meseta. Comprobado con los nuevos tabiques: las puertas están en el tabique del pasillo x = 1,25 y la puerta de la vivienda en y = 10,15 (x 0,2–1,05), así que ninguna cae en un vano arriostrado. En A0/B0 (núcleo antiguo) los planos son y = 4,3 (C5–C6), y ≈ 8,1 (C8–C9) y el lindero trasero, con la misma comprobación de puertas. Cualquier puerta que se añada después en un vano arriostrado obliga a cambiar a arriostramiento en K o pórtico rígido."
    },
    {
      "en": "C8 is not at the hall-wall corner (x = 1.25), because the hall-wall doors next to the cross wall leave no room and their leaves swing to x ≈ 2.0. In A/B, C8 is at (2.13, 7.90) inside the y = 7.9 wall. That x is reused by T4 and C18 along the west side of the lift. In A0/B0 it is at (2.00, 8.20).",
      "es": "C8 no está en la esquina del tabique del pasillo (x = 1,25): las puertas del pasillo junto al tabique transversal no dejan sitio y sus hojas barren hasta x ≈ 2,0. En A/B, C8 está en (2,13; 7,90), dentro del tabique y = 7,9, en la misma x que T4 y C18 junto al lado oeste del ascensor. En A0/B0 está en (2,00; 8,20)."
    },
    {
      "en": "Party-wall columns C4, C7 and C10 (HEB 140–160 at x = 0.30) stand in the hall along the party wall. The hall wall has been moved from x = 1.10 to x = 1.25 for them: the hall is about 1.05 m clear, and about 0.80–0.85 m at each column including fire protection. The architect must confirm the minimum corridor width; flat columns along the party wall (e.g. RHS 200×100) would add about 0.10 m.",
      "es": "Los pilares de medianera C4, C7 y C10 (HEB 140–160 en x = 0,30) quedan dentro del pasillo junto a la medianera. Para ellos el tabique del pasillo se ha desplazado de x = 1,10 a x = 1,25: el pasillo queda con ~1,05 m libres y ~0,80–0,85 m en cada pilar con su protección contra incendios. El proyectista debe confirmar el ancho mínimo de pasillo; pilares planos junto a la medianera (p. ej. tubo rectangular 200×100) darían ~0,10 m más."
    },
    {
      "en": "A/B (new core): C10 (0.30, 11.55) stands in the landing corner against the party wall, 0.13 m before the stair opening. It narrows the landing at the top of stair lane 1 by about 0.2 m. The flat door on y = 10.15 at x 0.2–1.05 left no room for a party-wall column at the core front. The architect must check the landing size (DB-SUA) against this column.",
      "es": "A/B (núcleo nuevo): C10 (0,30; 11,55) queda en la esquina del rellano junto a la medianera, a 0,13 m del hueco de escalera, y estrecha ~0,2 m el rellano a la llegada del tramo 1. La puerta de la vivienda en y = 10,15 (x 0,2–1,05) no dejaba sitio para un pilar de medianera en el frente del núcleo. El arquitecto debe comprobar las dimensiones del rellano (DB-SUA) con este pilar."
    },
    {
      "en": "A/B (new core): three small core columns are needed because the stair and the lift are only 0.10 m apart and nothing may cross them. C18 (2.13, 11.55) sits at the landing/lift corner and must stay HEB 140 to keep 0.10 m from the shaft. C17 (2.45, 12.00) sits at the stair/lift corner. C16 (4.15, 11.40) sits in the new façade wall beside the lift. In planta baja, C17 stands at the south edge of the entrance strip from the Carrasqueta door and leaves about 0.83 m clear beside it.",
      "es": "A/B (núcleo nuevo): hacen falta tres pilares pequeños en el núcleo porque escalera y ascensor sólo distan 0,10 m y nada puede cruzarlos. C18 (2,13; 11,55) está en la esquina rellano/ascensor y debe quedar en HEB 140 para mantener 0,10 m al hueco. C17 (2,45; 12,00) está en la esquina escalera/ascensor. C16 (4,15; 11,40) está en el muro de fachada nuevo junto al ascensor. En planta baja, C17 queda en el borde sur de la franja de entrada desde la puerta de Carrasqueta y deja ~0,83 m libres a su lado."
    },
    {
      "en": "A/B (new core): the back row C12–C13 sits at y = 15.20, so that columns up to HEB 200 keep 0.10 m from the half-landing. These columns are flush with the back boundary (y = 15.30), so the back wall must be built around them.",
      "es": "A/B (núcleo nuevo): la alineación trasera C12–C13 está en y = 15,20 para que pilares de hasta HEB 200 mantengan 0,10 m a la meseta; quedan enrasados con el lindero trasero (y = 15,30) y el muro trasero debe envolverlos."
    },
    {
      "en": "A/B (new core): the planta baja storey is 4.0 m. At about 0.175 m per riser it needs about 23 risers, but the U-stair in the core has two flights of 8 treads (about 18 risers, for 3.0 m). So the PB stair needs an extra flight or a deeper core. The architect must solve this; it may move C10, C17 or C18.",
      "es": "A/B (núcleo nuevo): la planta baja tiene 4,0 m; a ~0,175 m por contrahuella necesita ~23 contrahuellas, pero la escalera en U del núcleo tiene dos tramos de 8 huellas (~18 contrahuellas, para 3,0 m). La escalera de PB necesita un tramo adicional o un núcleo más profundo; lo debe resolver el arquitecto, y puede desplazar C10, C17 o C18."
    },
    {
      "en": "A/B: the x-direction bracing in the ático storey uses plane y = 7.9 (C8–C15). That needs a solid wall at y = 7.9 inside the studio, for example the bathroom or wardrobe wall; otherwise use a K-brace or a stiff frame there. The machine-room-less lift also needs about 3.4–3.6 m of headroom above the top stop, against a 3.0 m ático storey, so the roof over the shaft may have to be raised locally.",
      "es": "A/B: el arriostramiento en dirección x de la planta ático usa el plano y = 7,9 (C8–C15), lo que requiere un muro ciego en y = 7,9 dentro del estudio (p. ej. el del baño o armario); si no, K o pórtico rígido. El ascensor sin cuarto de máquinas necesita ~3,4–3,6 m de huida sobre la última parada frente a 3,0 m de planta ático: puede ser necesario recrecer localmente la cubierta sobre el hueco."
    },
    {
      "en": "New floor levels (+4.0, +7.0) must be checked against the existing window and balcony openings of the retained façades: slab edges must not cut across an opening.",
      "es": "Comprobar las nuevas cotas de forjado (+4,0; +7,0) frente a los huecos existentes de las fachadas conservadas: los cantos de forjado no deben cruzar ventanas ni balcones."
    },
    {
      "en": "The retained façades are assumed to be 0.40 m solid brick in fair condition. Tie anchor capacity must be proven by on-site pull-out tests. The façade foundations must not be undermined by the new pile caps.",
      "es": "Se supone fachada de ladrillo macizo de 0,40 m en estado aceptable: la capacidad de los anclajes debe demostrarse con ensayos de arrancamiento in situ, y no se debe descalzar su cimentación con los nuevos encepados."
    },
    {
      "en": "Seismic (NCSE-02) is not mandatory for this building, but the indicative equivalent base shear (soft soil C = 2.0) is larger than the ULS wind in the y-direction (along the party wall). The engineer may choose to apply it voluntarily; then the party-wall bracing rods would grow by about one or two sizes.",
      "es": "El sismo (NCSE-02) no es obligatorio en este edificio, pero el cortante basal orientativo (terreno blando C = 2,0) supera al viento mayorado en dirección y (paralela a la medianera). Si el proyectista decide aplicarlo voluntariamente, los tirantes del plano de medianera crecerían uno o dos diámetros."
    },
    {
      "en": "Wind is taken without any shelter from neighbour no. 227 (6 storeys) — conservative for x-direction. The x-direction bracing (two cross-wall planes and the back boundary) and its columns are governed by wind; with the shelter counted, steel would fall by ~1.4 t (A) / ~0.5 t (B).",
      "es": "El viento se ha tomado sin el apantallamiento del colindante nº 227 (6 plantas), del lado de la seguridad en dirección x. El arriostramiento en x (dos planos de tabiques transversales y lindero trasero) y sus pilares los gobierna el viento; contando ese apantallamiento, el acero bajaría ~1,4 t (A) / ~0,5 t (B)."
    },
    {
      "en": "Valencia alluvial soils can have a high water table. Pile-cap excavation may need dewatering, and the micropile capacity (250 kN assumed) is only an assumption until it is load-tested.",
      "es": "Los suelos aluviales de Valencia pueden tener el nivel freático alto: la excavación de encepados puede requerir agotamiento, y la capacidad de los micropilotes (250 kN supuestos) es sólo una hipótesis hasta su prueba de carga."
    },
    {
      "en": "Costs cover the structure package only (steel, fire protection, slabs, micropile foundations). The façade stabiliser and demolition (≈ 25,000–50,000 €), ground slab, stair steps, lift, finishes, VAT and fees are excluded.",
      "es": "Los costes sólo incluyen la estructura (acero, protección al fuego, forjados y cimentación por micropilotes). Excluido: estabilizador de fachada y derribo (≈ 25.000–50.000 €), solera, peldañeado, ascensor, acabados, IVA y honorarios."
    }
  ]
};
