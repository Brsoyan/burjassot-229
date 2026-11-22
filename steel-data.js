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
      "kN_m2": 0.97,
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
      "built_m2": 390.2,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (lift + stair openings)",
            "es": "Brochales del núcleo (huecos de ascensor y escalera)"
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
        "area_m2": 342.7
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
          "N_sls_kN": 334,
          "N_uls_kN": 462
        },
        {
          "id": "C12",
          "N_sls_kN": 528,
          "N_uls_kN": 832
        },
        {
          "id": "C13",
          "N_sls_kN": 576,
          "N_uls_kN": 897
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×4; C7 ×2; C8 ×3; C9 ×3; C10 ×2; C11 ×2; C12 ×3; C13 ×3 → 34 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C8, C9, C12, C13 up to 315 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×4; C6 ×4; C7 ×2; C8 ×3; C9 ×3; C10 ×2; C11 ×2; C12 ×3; C13 ×3 → 34 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C8, C9, C12, C13 hasta 315 kN — la absorben los micropilotes a tracción."
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
        "cost_eur_low": 135700.0,
        "cost_eur_high": 208300.0,
        "cost_per_home_low": 27100.0,
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
          "value": "not mandatory (ab 0.06g < 0.08g, normal importance, braced both ways, < 7 storeys); indicative Vs ≈ 333 kN vs ULS wind x 346 kN / y 155 kN — if applied voluntarily it would govern the party-wall (y) bracing",
          "ok": true
        },
        {
          "item": {
            "en": "Uplift at bracing columns (characteristic)",
            "es": "Tracción en pilares de arriostramiento (característica)"
          },
          "value": "max 315 kN → micropiles in tension",
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
        }
      ]
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
      "built_m2": 304.9,
      "members": [
        {
          "group": {
            "en": "Core trimmer beams (lift + stair openings)",
            "es": "Brochales del núcleo (huecos de ascensor y escalera)"
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
        "area_m2": 263.2
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
          "N_sls_kN": 256,
          "N_uls_kN": 399
        },
        {
          "id": "C11",
          "N_sls_kN": 256,
          "N_uls_kN": 354
        },
        {
          "id": "C12",
          "N_sls_kN": 346,
          "N_uls_kN": 557
        },
        {
          "id": "C13",
          "N_sls_kN": 381,
          "N_uls_kN": 604
        }
      ],
      "foundations": [
        {
          "type": {
            "en": "RECOMMENDED: micropiles + pile caps + tie beams",
            "es": "RECOMENDADA: micropilotes + encepados + vigas de atado"
          },
          "detail": {
            "en": "Micropiles Ø150–200 mm, ~15 m, assumed 250 kN service each (min. 2 per cap): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2 → 27 micropiles in total. Caps tied in both directions with 40×50 cm tie beams; perimeter caps tied back to interior caps. Small rigs can drill 0.25–0.30 m from the party wall and the retained facades without undermining them. Net uplift (characteristic) at C5, C6, C12, C13 up to 180 kN — taken by micropiles in tension.",
            "es": "Micropilotes Ø150–200 mm, ~15 m, carga de servicio supuesta 250 kN (mín. 2 por encepado): C1 ×2; C2 ×2; C3 ×2; C4 ×2; C5 ×3; C6 ×2; C7 ×2; C8 ×2; C9 ×2; C10 ×2; C11 ×2; C12 ×2; C13 ×2 → 27 micropilotes en total. Encepados atados en ambas direcciones con vigas de atado de 40×50 cm; los encepados perimetrales se atan a los interiores. Las máquinas pequeñas perforan a 0,25–0,30 m de la medianera y de las fachadas conservadas sin descalzarlas. Tracción neta (característica) en C5, C6, C12, C13 hasta 180 kN — la absorben los micropilotes a tracción."
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
        "cost_eur_low": 104500.0,
        "cost_eur_high": 160500.0,
        "cost_per_home_low": 26100.0,
        "cost_per_home_high": 40100.0
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
          "value": "max 180 kN → micropiles in tension",
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
        }
      ]
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
      "A": "5,634 kN",
      "B": "3,876 kN",
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
      "A": "135,700 – 208,300 €",
      "B": "104,500 – 160,500 €",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost per home",
        "es": "Coste de estructura por vivienda"
      },
      "A": "27,100 – 41,700 €",
      "B": "26,100 – 40,100 €",
      "better": "B"
    },
    {
      "metric": {
        "en": "Structure cost per m² built",
        "es": "Coste de estructura por m² construido"
      },
      "A": "348 – 534 €/m²",
      "B": "343 – 526 €/m²",
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
      "en": "Column C12 (back corner of the stair landing) and C10 (in front of the lift) need about 20 cm of coordination with the core layout. The stair and lift currently start 0.15 m from the party wall.",
      "es": "Los pilares C12 (esquina trasera del rellano) y C10 (delante del ascensor) requieren ~20 cm de coordinación con el núcleo: la escalera y el ascensor arrancan hoy a 0,15 m de la medianera."
    },
    {
      "en": "The X-bracing planes must stay blind walls at every level: the party wall, the cross walls at y = 4.3 between C5 and C6 (living room against bedroom 1 / PB bathroom) and at y≈8.1 between C8 and C9 (bedroom 1 / bathroom against bedroom 2, PB included), and the back boundary. Checked against the plans: there are no doors in these planes; the hall doors are on the x = 1.1 wall. Any door added there later needs a K-brace or portal frame instead.",
      "es": "Los planos arriostrados deben ser paños ciegos en todas las plantas: medianera, tabiques transversales y = 4,3 entre C5 y C6 (salón frente a dormitorio 1 / baño de PB) e y≈8,1 entre C8 y C9 (dormitorio 1 / baño frente a dormitorio 2, también en PB), y lindero trasero. Comprobado en planos: no hay puertas en estos planos; las puertas del pasillo están en el tabique x = 1,1. Cualquier puerta añadida en ellos obligaría a cambiar a arriostramiento en K o pórtico rígido."
    },
    {
      "en": "C8 is placed at x = 2.00 (not at the hall-wall corner x = 1.1): the hall wall has two doors with jambs at y = 8.1 and 8.3, leaving no room for a column there, and their leaves swing to x ≈ 1.85. At x = 2.00 the column sits inside the y = 8.2 wall; the bathroom WC (x 2.05–2.47) moves ~10 cm east and the PB bedroom-1 wardrobe starts at x ≥ 2.15.",
      "es": "C8 se sitúa en x = 2,00 (no en la esquina del tabique del pasillo x = 1,1): ese tabique tiene dos puertas con jambas en y = 8,1 y 8,3, sin hueco para un pilar, y sus hojas barren hasta x ≈ 1,85. En x = 2,00 el pilar queda dentro del tabique y = 8,2; el inodoro del baño (x 2,05–2,47) se desplaza ~10 cm y el armario del dormitorio 1 de PB empieza en x ≥ 2,15."
    },
    {
      "en": "Party-wall columns C4, C7 and C10 (HEB 140–160 at x = 0.30) stand in the 0.98 m hall along the party wall, which narrows it to about 0.70 m at each column. Either move the hall wall from x = 1.10 to about 1.25, or use flat columns along the party wall (e.g. RHS 200×100, protruding about 0.10 m), to be checked by the engineer.",
      "es": "Los pilares de medianera C4, C7 y C10 (HEB 140–160 en x = 0,30) quedan dentro del pasillo de 0,98 m junto a la medianera y lo estrechan a ~0,70 m en cada pilar. Opciones: desplazar el tabique del pasillo de x = 1,10 a ~1,25, o usar pilares planos junto a la medianera (p. ej. tubo rectangular 200×100, que sobresale ~0,10 m), a comprobar por el proyectista."
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
      "en": "Wind is taken without any shelter from neighbour no. 227 (6 storeys) — conservative for x-direction; the x-direction bracing (plane C8–C9) and its columns are governed by wind drift and uplift.",
      "es": "El viento se ha tomado sin el apantallamiento del colindante nº 227 (6 plantas), del lado de la seguridad en dirección x; el arriostramiento en x (plano C8–C9) y sus pilares los gobiernan el desplome y la tracción por viento."
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
