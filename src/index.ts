import { error } from "console";
import { 
    Client, 
    Guild, 
    GuildChannel, 
    GuildEmoji, 
    GuildMember, 
    Snowflake, 
    ThreadChannel,
} from "discord.js";

export class Resolving {

        /**
     * 
     * @param guild Guild - The guild where the emoji is.
     * @param member Snowflake - The member ID you're looking for
     * @returns Promise<GuildEmoji | void>
     */

    static async resolveMember(guild: Guild, member: Snowflake): Promise<GuildMember | void> {
        try {
            let m = guild.members.cache.get(member);
            if(!m) {
                return await guild.members.fetch(member)
            } else {
                return m
            }
        } catch {
           return error("No member was found with this id: " + member, )
        }
    }

        /**
     * 
     * @param guild Guild - The guild where the channel is.
     * @param channel Snowflake - The channel ID you're looking for
     * @returns Promise<GuildEmoji | void>
     */
    static async resolveChannel(guild: Guild, channel: Snowflake): Promise<GuildChannel | ThreadChannel | void> {
        try {
            let c = guild.channels.cache.get(channel);
            if(!c) {
                return await guild.channels.fetch(channel)
            } else {
                return c
            }
        } catch {
            return error("No channel was found with this id: " + channel)
        }
    }

    /**
     * 
     * @param guild Guild - The guild where the emoji is.
     * @param emoji Snowflake - The emoji ID you're looking for
     * @returns Promise<GuildEmoji | void>
     */

    static async resolveEmoji(guild: Guild, emoji: Snowflake): Promise<GuildEmoji | void> {
        try {
            let e = guild.emojis.cache.get(emoji);
            if(!e) {
                return await guild.emojis.fetch(emoji)
            } else {
                return e
            }
        } catch {
            return error("No emoji was found with this id: " + emoji)
        }
    }

    /**
     * 
     * @param client Client - Your client
     * @param guild Snowflake - The guild ID you're looking for
     * @returns Promise<GuildEmoji | void>
     */

    static async resolveGuild(client: Client, guild: Snowflake) {
        try {
            let g = client.guilds.cache.get(guild);
            if(!g) {
                return await client.guilds.fetch(guild)
            } else {
                return g
            }
        } catch {
            return error("No guild was found with this id: " + guild)
        }
    }
}