import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
	* {
		transition: background-color 100ms ease-in, color 100ms ease-in;
	}

	body {
		
		margin: 0;
		background-color: var(--color-background);
		color: var(--color-text);
		font-family: 'Open Sans';

		&.light {
			--color-text: #000;
			--color-background: #F5F5F5;
			--color-highlight-secondary: #FFF;
			--color-highlight-primary: #FFF; 
			--color-green: #82F9A1;
			--gradient-primary: linear-gradient(90deg, #F27A54 0%, #A154F2 186.42%);
			--color-1: var(--color-text);
			--color-2: var(--color-text);
			--color-3: var(--color-text);
			--color-navigation: #DEE5EC;
		}

		&.dark {
			--color-text: #fff;
			--color-background: #30363D;
			--color-highlight-secondary: #0F171D;
			--color-highlight-primary: #3C444D; 
			--color-green: #82F9A1;
			--gradient-primary: linear-gradient(90deg, #F27A54 0%, #A154F2 186.42%);
			--color-1: var(--color-text);
			--color-2: var(--color-text);
			--color-3: var(--color-text);
			--color-navigation: #4C5B6D;
		}
	}

	h1, h2 {
		font-weight: 800;
	}

	h1 {
		font-size: 50px;
	}

	h2 {
		font-size: 24px;
	}

	h3 {
		font-size: 20px;
		margin: 30px 0 10px 0;
	}

	h4 {
		font-size: 18px;
		margin: 20px 0 10px 0;
	}

	.markdown {
		h1, h2 {
			border-bottom: 1px solid var(--color-text);
		}

		a {
			color: var(--color-1);

			&:hover {
				color: var(--color-text) !important;
		  }
		}

		.anchor {
			color: transparent;

			svg {
				fill: var(--color-text);
			}
		}

		img {
			display: block;
			margin: 0 auto;
		}
	}

	p {
	  line-height: 1.75rem;
	  font-size: 16px;
	}

	a {
	  text-decoration: none;
	  color: var(--color-text);
	  border-bottom: 0.12em solid currentColor;
	  padding-bottom: 1px;
	  transition: color 100ms ease-in-out;

	  &:hover {
	    color: var(--color-text) !important;
	  }
	}

	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	th, td {
		border: 1px solid var(--color-text);
		background-color: var(--color-highlight-primary);
		border-collapse: collapse;
		padding: 10px 15px;
		border-spacing: 0;
	}

`

export default GlobalStyle
