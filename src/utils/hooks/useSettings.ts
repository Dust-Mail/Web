import useLocalStorageState from "use-local-storage-state";

import { useCallback } from "react";

import Settings from "@components/Settings";

export interface Settings {
	httpServerUrl: string | null;
	useApiOnDesktop: boolean;
}

const useSettings = (): [
	Settings,
	(setting: keyof Settings, value: string | boolean | null) => void
] => {
	const [settings, setValue] = useLocalStorageState<Settings>("settings", {
		defaultValue: {
			httpServerUrl: import.meta.env.VITE_DEFAULT_SERVER,
			useApiOnDesktop: false
		}
	});

	const setSetting = useCallback(
		(setting: keyof Settings, value: string | boolean | null) => {
			setValue({ ...settings, [setting]: value });
		},
		[settings]
	);

	return [settings, setSetting];
};

export default useSettings;
