import React from 'react';

const Test = () => {
	const noDaftar = '123456789012345678';
	const nik = '3214324698327957';

	const noDaftar1 = noDaftar.substring(0, 4);
	const noDaftar2 = noDaftar.substring(4, 12);
	const noDaftar3 = noDaftar.substring(12, 18);

	noDaftar.split('').forEach((no) => {
		console.log(noDaftar1);
	});

	return (
		<div className='p-8 h-screen'>
			<div className='px-4 py-4 border-2 border-black p-4 '>
				<div className='flex justify-between mb-2'>
					<span className='underline'>PENDIDIKAN FORMAL</span>
					<span>Kartu AK 1</span>
				</div>
				<div className='grid grid-cols-12'>
					<div className='col-span-4'>
						{/* 1 */}
						<div className='flex justify-between'>
							<span className='text-sm'>
								SMA atau <br /> Sederajat
							</span>
							<span className='text-sm'>
								SMK NEGRI 6 KUNINGAN
								<br /> TKR-O
							</span>
							<span className='text-sm'>TH. 2022</span>
						</div>
						<div className='mt-40'>
							<span className='underline'>............................................</span>
						</div>

						<div className='flex justify-between'>
							<div>
								<div className='mt-8'>
									<span className='underline'>KETERAMPILAN</span>
								</div>
								<div className='mt-8'>
									<ul className='list-disc ml-4'>
										<li>Di bidang mesin</li>
									</ul>
								</div>
							</div>

							<div>
								<div className='mt-8 flex flex-col items-center'>
									<span className=''>Pengantar Kerja</span>
									<span className='underline mt-32'>Wanwan</span>
									<span className=''>NIP. 12918947392978</span>
								</div>
							</div>
						</div>
					</div>

					{/* Section 2 */}
					{/* <div className=''></div> */}
					<div className='col-span-8 pl-8'>
						<div className='grid grid-cols-12'>
							<div className='col-span-2 flex justify-center'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/5/5c/Logo_Kabupaten_kuningan.jpg'
									alt='logo'
									className='h-16'
								/>
							</div>
							<div className='col-span-10 flex flex-col items-center'>
								<h1 className='text-md'>PEMERINTAH KABUPATEN KUNINGAN</h1>
								<h1 className='text-md'>DINAS TENAGA KERJA DAN TRANSMIGRASI KABUPATEN KUNINGAN</h1>
								<h1 className='text-md'>
									JL. RE MARTADINATA KM.6 KERTAWANGUNAN - SINDANGAGUNG, 45573 Telp: 0232871661
								</h1>
							</div>
						</div>

						<div className='border-black border-2 flex justify-center my-2'>
							<h2 className='text-xl'>KARTU TANDA BUKTI PENDAPTARAN PENCARI KERJA</h2>
						</div>

						<div className='grid grid-cols-12 pb-2 text-sm'>
							<div className='col-span-3 mt-1'>
								<span>No. Pendaftaran Pencari Kerja</span>
							</div>
							<div className='col-span-9 flex'>
								<span className='flex mr-6'>
									{noDaftar1.split('').map((no) => (
										<p className='border border-black px-2'>{no}</p>
									))}
								</span>
								<span className='flex mr-6'>
									{noDaftar2.split('').map((no) => (
										<p className='border border-black px-2'>{no}</p>
									))}
								</span>
								<span className='flex mr-6'>
									{noDaftar3.split('').map((no) => (
										<p className='border border-black px-2'>{no}</p>
									))}
								</span>
							</div>
						</div>

						<div className='grid grid-cols-12 text-sm'>
							<div className='col-span-3'>
								<span>No. Induk Kependudukan</span>
							</div>
							<div className='col-span-9'>
								<span className='flex flex-row'>
									{nik.split('').map((no) => (
										<p className='border border-black px-2'>{no}</p>
									))}
								</span>
							</div>
						</div>

						<div className='grid grid-cols-12 mt-8 text-sm'>
							<div className='col-span-2 mt-1'>
								<img src='https://i.pinimg.com/564x/76/94/84/769484dafbe89bf2b8a22379658956c4.jpg' alt='logo' />
								<span className='flex justify-center mt-16 '>Pencari Kerja</span>
							</div>
							{/* BIODATA */}
							<div className='col-span-10 ml-8'>
								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>NAMA</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row'>Alucard Zilong</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>TTL</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row'>Cirebon, 32 Januari 2022</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>Jenis Kelamin</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row'>Laki Laki</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>Status</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row'>Belum Kawin</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>Alamat</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row'>
											DUSUN. KARANG WANGI RT.002/RW.003 DESA. MEKARJAYA KECAMATAN PANCALANG KABUPATEN KUNINGAN
										</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>No.Telp</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9 mt-1'>
										<span className='flex flex-row'>081234567887</span>
									</div>
								</div>

								<div className='grid grid-cols-12'>
									<div className='col-span-2 mt-1'>
										<span>Berlaku s.d.</span>
									</div>
									<div className='col-span-1 mt-1'>
										<span>:</span>
									</div>
									<div className='col-span-9'>
										<span className='flex flex-row mt-1'>14-06-2024</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
