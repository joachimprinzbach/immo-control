export interface ImmoInvestment {
	name?: string;
	id?: number;
	kaufpreis?: number;
	wohnflaeche?: number;
	monatsNettoKaltmiete?: number;
	bundesland?: string;
	grundErwerbssteuerSatz?: number;
	maklerProvisionKaeuferSatz?: number;

}

export interface Bundesland {
	name?: string;
	steuersatz?: number;
	maklerProvisionKaeufer?: number;
}

export interface LevelConfiguration {
	good?: number;
	ok?: number;
	bad?: number;
}

export interface Configuration {
	bruttoMietRendite?: LevelConfiguration;
	nettoMietRendite?: LevelConfiguration;
	eigenkapitalRendite?: LevelConfiguration;
	cashFlowOperativ?: LevelConfiguration;
	cashFlowNachSteuern?: LevelConfiguration;
}