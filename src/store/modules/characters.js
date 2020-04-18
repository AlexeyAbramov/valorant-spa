export default {
  namespaced: true,
  state: {
    characters: [
      {
        name: 'BREACH',
        photo: 'breach300.png',
        abilities: [
          {
            name: 'Aftershock',
            logo: 'aftershock.svg',
            cost: 100,
            charges: '• 1 Use', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a fusion charge.'
              },
              {
                rules: 'FIRE',
                text:
                  'the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.'
              }
            ]
          },
          {
            name: 'Flashpoint',
            logo: 'flashpoint.svg',
            cost: 200,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'a blinding charge.'
              },
              {
                rules: 'FIRE',
                text:
                  'the charges to set a fast-acting burst through the wall. The charge detonates to blind all players looking at it.'
              }
            ]
          },
          {
            name: 'Fault Line',
            logo: 'fault-line.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a seismic blast.'
              },
              {
                rules: 'HOLD FIRE',
                text: 'to increase the distance.'
              },
              {
                rules: 'RELEASE',
                text:
                  'to set off the quake, dazing all players in its zone and in a line up to the zone.'
              }
            ]
          },
          {
            name: 'Rolling Thunder',
            logo: 'rolling-thunder.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a seismic charge.'
              },
              {
                rules: 'HOLD FIRE',
                text:
                  'to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.'
              }
            ]
          }
        ]
      },
      {
        name: 'BRIMSTONE',
        photo: 'brimstone300.png',
        abilities: [
          {
            name: 'Stim Beacon',
            logo: 'stim-beacon.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'stim beacon.'
              },
              {
                rules: 'FIRE',
                text:
                  'to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.'
              }
            ]
          },
          {
            name: 'Incendiary',
            logo: 'incendiary.svg',
            cost: 200,
            charges: '• 1 Use', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'an incendiary grenade launcher.'
              },
              {
                rules: 'FIRE',
                text:
                  'to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damage players within the zone.'
              }
            ]
          },
          {
            name: 'Sky Smoke',
            logo: 'sky-smoke.svg',
            cost: 100,
            charges: '• 3 Uses', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a tactical map.'
              },
              {
                rules: 'HOLD FIRE',
                text:
                  "'to set locations where Brimstone's smoke clouds will land.'"
              },
              {
                rules: 'ALTERNATE FIRE',
                text:
                  'to confirm, launching long-lasting smoke clouds that block vision in the selected area.'
              }
            ]
          },
          {
            name: 'Orbital Strike',
            logo: 'orbital-strike.svg',
            cost: 6,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a tactical map.'
              },
              {
                rules: 'FIRE',
                text:
                  'to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.'
              }
            ]
          }
        ]
      },
      {
        name: 'CYPHER',
        photo: 'cypher300.png',
        abilities: [
          {
            name: 'Trapwire',
            logo: 'trapwire.svg',
            cost: 200,
            charges: '• 2 Uses', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a trapwire.'
              },
              {
                rules: 'FIRE',
                text:
                  'to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be <b>REDEPLOYED</b>.'
              }
            ]
          },
          {
            name: 'Cyber Cage',
            logo: 'cyber-cage.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'a cyber cage.'
              },
              {
                rules: 'FIRE',
                text: 'to toss the cyber cage in front of Cypher.'
              },
              {
                rules: 'ACTIVATE',
                text:
                  'to create a zone that blocks vision and slows enemies who pass through it.'
              }
            ]
          },
          {
            name: 'Spycam',
            logo: 'spycam.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a spycam.'
              },
              {
                rules: 'FIRE',
                text: 'to place the spycam at the targeted location.'
              },
              {
                rules: 'RE-USE',
                text:
                  "'this ability to take control of the camera's view. While in control of the camera, <b>FIRE</b> to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'"
              }
            ]
          },
          {
            name: 'Neural Theft',
            logo: 'neural-theft.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'INSTANTLY',
                text:
                  'use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.'
              }
            ]
          }
        ]
      },
      {
        name: 'JETT',
        photo: 'jett300.png',
        abilities: [
          {
            name: 'Cloudburst',
            logo: 'cloudburst.svg',
            cost: 100,
            charges: '• 3 Uses', keyBinding: 'C',
            description: [
              {
                rules: 'INSTANTLY',
                text:
                  'throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.'
              },
              {
                rules: 'HOLD',
                text:
                  'the ability key to curve the smoke in the direction of your crosshair.'
              }
            ]
          },
          {
            name: 'Updraft',
            logo: 'updraft.svg',
            cost: 200,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'INSTANTLY',
                text: 'propel Jett high in the air.'
              }
            ]
          },
          {
            name: 'Tailwind',
            logo: 'tailwind.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'INSTANTLY',
                text:
                  'propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.'
              }
            ]
          },
          {
            name: 'Blade Storm',
            logo: 'blade-storm.svg',
            cost: 6,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text:
                  'a set of highly accurate throwing knives that recharge on killing an opponent.'
              },
              {
                rules: 'FIRE',
                text: 'to throw a single knive at your target.'
              },
              {
                rules: 'ALTERNATE FIRE',
                text: 'to throw all remaining daggers at your target.'
              }
            ]
          }
        ]
      },
      {
        name: 'OMEN',
        photo: 'omen300.png',
        abilities: [
          {
            name: 'Shrouded Step',
            logo: 'shrouded-step.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a shadow walk ability and see its range indicator.'
              },
              {
                rules: 'FIRE',
                text:
                  'to begin a brief channel, then teleport to the marked location.'
              }
            ]
          },
          {
            name: 'Paranoia',
            logo: 'paranoia.svg',
            cost: 200,
            charges: '• 1 Use', keyBinding: 'Q',
            description: [
              {
                rules: 'INSTANTLY',
                text:
                  'fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.'
              }
            ]
          },
          {
            name: 'Dark Cover',
            logo: 'dark-cover.svg',
            cost: 'Free',
            charges: '• 2 Uses', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a shadow orb and see its range indicator.'
              },
              {
                rules: 'FIRE',
                text:
                  'to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision.'
              },
              {
                rules: 'HOLD ALTERNATE FIRE',
                text: 'while targeting to move the marker further away.'
              },
              {
                rules: 'HOLD',
                text:
                  'the ability key while targeting to move the marker closer.'
              }
            ]
          },
          {
            name: 'From the Shadows',
            logo: 'from-the-shadows.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a tactical map.'
              },
              {
                rules: 'FIRE',
                text:
                  'to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.'
              }
            ]
          }
        ]
      },
      {
        name: 'PHOENIX',
        photo: 'phoenix300.png',
        abilities: [
          {
            name: 'Blaze',
            logo: 'blaze.svg',
            cost: 200,
            charges: '• 1 Use', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a flame wall.'
              },
              {
                rules: 'FIRE',
                text:
                  'to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.'
              },
              {
                rules: 'HOLD FIRE',
                text: 'to bend the wall in the direction of your crosshair.'
              }
            ]
          },
          {
            name: 'Curveball',
            logo: 'curveball.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text:
                  'a flare orb that takes a curving path and detonates shortly after throwing.'
              },
              {
                rules: 'FIRE',
                text:
                  'to curve the flare orb to the left, detonating and blinding any player who sees the orb.'
              },
              {
                rules: 'ALTERNATE FIRE',
                text: 'to curve the flare orb to the right.'
              }
            ]
          },
          {
            name: 'Hot Hands',
            logo: 'hot-hands.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a fireball.'
              },
              {
                rules: 'FIRE',
                text:
                  'to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damage enemies.'
              }
            ]
          },
          {
            name: 'Run it Back',
            logo: 'run-it-back.svg',
            cost: 6,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'INSTANTLY',
                text:
                  "place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health."
              }
            ]
          }
        ]
      },
      {
        name: 'RAZE',
        photo: 'raze300.png',
        abilities: [
          {
            name: 'Boom Bot',
            logo: 'boom-bot.svg',
            cost: 200,
            charges: '• 1 Use', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a Boom Bot.'
              },
              {
                rules: 'FIRE',
                text:
                  'will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.'
              }
            ]
          },
          {
            name: 'Blast Pack',
            logo: 'blast-pack.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'INSTANTLY',
                text: 'throw a Blast Pack that will stick to surfaces.'
              },
              {
                rules: 'RE-USE',
                text:
                  'the ability after deployment to detonate, damaging and moving anything hit.'
              }
            ]
          },
          {
            name: 'Paint Shells',
            logo: 'paint-shells.svg',
            cost: 200,
            charges: '• 2 Uses', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a cluster grenade.'
              },
              {
                rules: 'FIRE',
                text:
                  'to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.'
              }
            ]
          },
          {
            name: 'Showstopper',
            logo: 'showstopper.svg',
            cost: 6,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a rocket launcher.'
              },
              {
                rules: 'FIRE',
                text:
                  'shoots a rocket that does massive area damage on contact with anything.'
              }
            ]
          }
        ]
      },
      {
        name: 'SAGE',
        photo: 'sage300.png',
        abilities: [
          {
            name: 'Barrier Orb',
            logo: 'barrier-orb.svg',
            cost: 300,
            charges: '• 1 Use', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a barrier orb.'
              },
              {
                rules: 'FIRE',
                text: 'places a solid wall.'
              },
              {
                rules: 'ALT FIRE',
                text: 'rotates the targeter.'
              }
            ]
          },
          {
            name: 'Slow Orb',
            logo: 'slow-orb.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'a slowing orb.'
              },
              {
                rules: 'FIRE',
                text:
                  'to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.'
              }
            ]
          },
          {
            name: 'Heal Orb',
            logo: 'heal-orb.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a healing orb.'
              },
              {
                rules: 'FIRE',
                text:
                  'with your crosshairs over a damaged ally to activate a heal-over-time on them.'
              },
              {
                rules: 'ALT FIRE',
                text: 'while Sage is damaged to activate a self heal-over-time.'
              }
            ]
          },
          {
            name: 'Rolling Thunder',
            logo: 'rolling-thunder.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a resurrection ability.'
              },
              {
                rules: 'FIRE',
                text:
                  'with your crosshairs placed over a deal ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.'
              }
            ]
          }
        ]
      },
      {
        name: 'SOVA',
        photo: 'sova300.png',
        abilities: [
          {
            name: 'Owl Drone',
            logo: 'owl-drone.svg',
            cost: 300,
            charges: '• 1 Use', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'an owl drone.'
              },
              {
                rules: 'FIRE',
                text:
                  'to deploy and take control of movement of the drone. While in control of the drone, <b>FIRE</b> to shoot a marking dart. This dart will reveal the location of any player struck by the dart.'
              }
            ]
          },
          {
            name: 'Shock Bolt',
            logo: 'shock-bolt.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'a bow with a shock bolt.'
              },
              {
                rules: 'FIRE',
                text:
                  'to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile.'
              },
              {
                rules: 'ALTERNATE FIRE',
                text: 'to add up to two bounces to this arrow.'
              }
            ]
          },
          {
            name: 'Recon Bolt',
            logo: 'recon-bolt.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: 'a bow with recon bolt.'
              },
              {
                rules: 'FIRE',
                text:
                  'to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. Enemies can destroy this bolt.'
              },
              {
                rules: 'HOLD FIRE',
                text: 'to extend the range of the projectile.'
              },
              {
                rules: 'ALTERNATE FIRE',
                text: 'to add up to two bounces to this arrow.'
              }
            ]
          },
          {
            name: "Hunter's Fury",
            logo: 'hunters-fury.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text:
                  'a bow with three long-range, wall-piercing energy blasts.'
              },
              {
                rules: 'FIRE',
                text:
                  'to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be <b>RE-USED</b> up to two more times while the ability timer is active.'
              }
            ]
          }
        ]
      },
      {
        name: 'VIPER',
        photo: 'viper300.png',
        abilities: [
          {
            name: 'Snakebite',
            logo: 'snakebite.svg',
            cost: 100,
            charges: '• 2 Uses', keyBinding: 'C',
            description: [
              {
                rules: 'EQUIP',
                text: 'a chemical launcher.'
              },
              {
                rules: 'FIRE',
                text:
                  'to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.'
              }
            ]
          },
          {
            name: 'Poison Cloud',
            logo: 'poison-cloud.svg',
            cost: 200,
            charges: '• 1 Use', keyBinding: 'E',
            description: [
              {
                rules: 'EQUIP',
                text: ' a gas emitter.'
              },
              {
                rules: 'FIRE',
                text:
                  'to throw the emitter that perpetually remains throughout the round. <b>RE-USE</b> the ability to create a toxic gas cloud at the cost of fuel. This ability can be <b>RE-USED</b> more than once and can be picked up to be <b>REDEPLOYED</b>.'
              }
            ]
          },
          {
            name: 'Toxic Screen',
            logo: 'toxic-screen.svg',
            cost: 'Free',
            charges: '• 1 Use', keyBinding: 'Q',
            description: [
              {
                rules: 'EQUIP',
                text: 'a gas emitter launcher.'
              },
              {
                rules: 'FIRE',
                text: 'to deploy a long line of gas emitters.'
              },
              {
                rules: 'RE-USE',
                text:
                  'the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be <b>RE-USED</b> more than once.'
              }
            ]
          },
          {
            name: "Viper's Pit",
            logo: 'vipers-pit.svg',
            cost: 7,
            charges: 'Ult Meter', keyBinding: 'X',
            description: [
              {
                rules: 'EQUIP',
                text: 'a chemical sprayer.'
              },
              {
                rules: 'FIRE',
                text:
                  'to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.'
              }
            ]
          }
        ]
      }
    ]
  },
  getters: {
    characters(state) {
      return state.characters;
    }
  }
};
