import { getProviders } from 'next-auth/react';
export default function Login({providers}) {
	return (
		<div>
			{Object.values(providers).map(provider => (
				<div>
					<button>SignIn With {provider.name}</button>
				</div>
			))}
		</div>
	);
}
export async function getServerSideProps(context) {
	const providers = await getProviders;
	return {
		props: { providers } // will be passed to the page component as props
	};
}
