import { theme } from 'antd'
import type { ThemeConfig } from 'antd'

export const antdTheme: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#24B472',
    colorInfo: '#0389CB',
    colorLink: '#0389CB',
    colorSuccess: '#24B472',
    colorError: '#ff4d4f',
    borderRadius: 12,
    controlHeight: 40,
    fontSize: 14,
  },
}
