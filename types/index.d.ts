interface InstallationData {
  [key: string]: number; // Using a generic string key for flexibility
}

export interface PluginData {
  name: string;
  installations: InstallationData;
  installationsPercentage: InstallationData;
  installationsPerVersion: InstallationData;
  installationsPercentagePerVersion: InstallationData;
}
