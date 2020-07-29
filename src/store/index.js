import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'


Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		numberOfRows: 3,
		cardsPerRow: 7,
		isFetching: false,
		currentRound: 0,
		finalRound: 3,
		cards: []
	},

	mutations: {
		DISPLAY_LOADER: (state) => {
			state.isFetching = true
		},
		HIDE_LOADER: (state) => {
			state.isFetching = false
		},
		SET_CARDS: (state, payload) => {
			state.cards = payload
		},
		
		CHOOSE_ROW: (state, payload) => {
			const unzippedRows = _.unzip(payload.columns)
			const chosenRow = unzippedRows[payload.rowIndex]
			const [first, last] = _.without(unzippedRows, chosenRow)
			const newRows = [first, chosenRow, last]
	
			state.cards = _.flatten(newRows)
		},
		
		BUMP_ROUND: (state) => {
			state.currentRound++
		},
		
		RESET_ROUND: (state) => {
			state.currentRound = 0
		}
		  
	},
	actions: {
		FETCH_CARDS: ({ commit }) => {
			commit('DISPLAY_LOADER')
			commit('RESET_ROUND')
		
			fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=21')
				.then(response => response.json())
				.then((response) => {
					commit('SET_CARDS', response.cards)
				})
				.catch((error) => {
					console.error(error)
				})
				.then(() => {
					commit('HIDE_LOADER')
				})
		},
		
		CHOOSE_ROW: ({ commit, getters }, payload) => {
			const columns = getters.columns
			const rowIndex = payload
		
			commit('CHOOSE_ROW', { rowIndex, columns })
			commit('BUMP_ROUND')
		
			return Promise.resolve()
		}
	},
	getters: {
		columns: (state) => {
			return _.chunk(state.cards, state.numberOfRows)
		},
		
		chosenCard: (state) => {
			return state.cards[10]
		}
		
	},
	modules: {
	}
})
