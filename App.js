import React from 'react'
import Openpay, { createDeviceSessionId } from 'rn-openpay'
import { Component } from 'react'
import { View, StyleSheet, Text, StatusBar } from 'react-native'
export default class App extends Component {
	state = {
		loading: false,
	}

	successToken = (response) => {
		const deviceSessionId = createDeviceSessionId()
		const token = response.id
		this.setState(() => ({ loading: false }))
		console.log(deviceSessionId)
		console.log(token)

		// Make the call to your server with your charge request
	}

	failToken = (response) => {
		console.log('failToken', response)
	}

	render() {
		const address = {
			city: 'Querétaro',
			country_code: 'MX',
			postal_code: '76900',
			line1: 'Av 5 de Febrero',
			line2: 'Roble 207',
			line3: 'Col Carrillo',
			state: 'Queretaro',
		}
		return (
			<Openpay
				isProductionMode={false}
				merchantId="m53wxf73sonprp7fptgf"
				publicKey="pk_bed8e880b6374d718c6a037329d2ab68"
				address={address}
				successToken={this.successToken}
				failToken={this.failToken}
				loading={this.state.loading}
			/>
			// <View style={styles.container}>
			// 	<Text>Open up App.js to start working on your app!</Text>
			// 	<StatusBar style="auto" />
			// </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
