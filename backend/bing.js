import { BingChat } from 'bing-chat-rnz'
import dotenv from 'dotenv'
import { env } from 'node:process';
dotenv.config()

env.BING_COOKIE = "TEST";

if (!process.env.BING_COOKIE) {
	throw new Error('Bing cookie must exist!')
}

// instantiate the BingChat class
const api = new BingChat({
	cookie: process.env.BING_COOKIE,
})

async function askBingChat(
	message,
	options,
) {
	const DEFAULT_TIMEOUT = 75000 // 75 seconds

	// send a message to Bing, timing out after 75 seconds
	const res = (await Promise.race([
		api.sendMessage(message, options),
		new Promise((_, reject) =>
			setTimeout(
				() => reject(new Error('Bing chat request timed out.')),
				DEFAULT_TIMEOUT,
			),
		),
	]))

	if (!res.text) {
		throw new Error('Empty response from Bing')
	}

	return {
		text: res.text,
		// return the conversationOptions so that we can continue the conversation
		conversationOptions: {
			conversationId: res.conversationId,
			clientId: res.clientId,
			conversationSignature: res.conversationSignature,
		},
	}
}

export {askBingChat}