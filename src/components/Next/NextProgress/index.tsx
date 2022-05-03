import NextProgress from 'next-progress'
import { useTheme } from 'styled-components'

export default function NextProgressComponent(){

    const theme = useTheme()

    return(
        <NextProgress
            options={{
                showSpinner: false
            }}
            color={theme.colors.primary_dark}
        />
    )
}
