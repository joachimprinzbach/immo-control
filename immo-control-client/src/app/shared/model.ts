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
	name: string;
	steuersatz: number;
	maklerProvisionKaeufer: number;
}