import { Client, Events } from 'discord.js';

import BaseEvent from '../base/BaseEvent';

class Ready extends BaseEvent {
  constructor() {
    super(true);
    this.eventName = Events.ClientReady;
  }

  private client: Client;

  public async trigger(client: Client) {
    try {
      this.client = client;
      const servers = this.client.guilds.cache.size;
      this.client.user.setActivity('Generating images using DALL·E 2');
      console.log(`Sofie FT-02 is running on ${servers} servers`);
      return
    } catch (error) {
      console.log(`[ERR] Error when executing Ready event`);
    }
  }
}

export default Ready;
