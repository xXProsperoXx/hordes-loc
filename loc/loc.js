// classes are exported as array since the game typically stores class as integer
import archer from './classes/archer.js'
import mage from './classes/mage.js'
import shaman from './classes/shaman.js'
import warrior from './classes/warrior.js'
const classes = [
  warrior,
  mage,
  shaman,
  archer ]

// Items
import armlet from './items/armlet.js'
import armor from './items/armor.js'
import bag from './items/bag.js'
import boot from './items/boot.js'
import bow from './items/bow.js'
import gem from './items/gem.js'
import glove from './items/glove.js'
import hammer from './items/hammer.js'
import misc from './misc.js'
import orb from './items/orb.js'
import quiver from './items/quiver.js'
import ring from './items/ring.js'
import shield from './items/shield.js'
import staff from './items/staff.js'
import sword from './items/sword.js'
import talisman from './items/talisman.js'
import totem from './items/totem.js'
const items = {
  armlet,
  bag,
  boot,
  bow,
  armor,
  gem,
  glove,
  hammer,
  misc,
  orb,
  quiver,
  ring,
  shield,
  staff,
  sword,
  talisman,
  totem
}

// Factions
import bloodlust from './factions/bloodlust.js'
import vanguard from './factions/vanguard.js'
const factions = [
  vanguard,
  bloodlust]

// Npcs
import blacksmith from './npcs/blacksmith.js'
import conjurer from './npcs/conjurer.js'
import merchant from './npcs/merchant.js'
import stash from './npcs/stash.js'
import trader from './npcs/trader.js'
const npcs = {
  conjurer,
  trader,
  merchant,
  stash,
  blacksmith
}

// User interface
import * as merchantui from './ui/merchant.js'
import * as stashui from './ui/stash.js'
import charmenu from './ui/charmenu.js'
import chat from './ui/chat.js'
import clan from './ui/clan.js'
import general from './ui/general.js'
import inventory from './ui/inventory.js'
import party from './ui/party.js'
import settings from './ui/settings.js'
import stats from './ui/stats.js'
const ui = {
  charmenu,
  chat,
  clan,
  inventory,
  merchant: merchantui.default,
  settings,
  party,
  stash   : stashui.default,
  stats,
  ...general }

export default {
  classes,
  items,
  factions,
  npcs,
  ui
}
