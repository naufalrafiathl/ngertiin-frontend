



const getSoal = () => {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { materi_kuis } = useSelector((state) => state.materi)

    useEffect(() => {
      student &&
      dispatch(related_mapel({
          jurusan: student.jurusan_data.id,
        })
      )
    }, [dispatch, student])

    return (
      <>
        <Routes>
            <Route path="" element={<JurusanComp/>}></Route>
            {mapel &&  
              mapel.related_mapel.map((mapel_data, key) => {
                return(
                  <Route 
                    path={`/${mapel_data.mapel.split(" ").join("-").toLowerCase()}/*`}
                    key={key}
                    element={<Mapel mapel_data={mapel_data}/>}
                  />
                )}
            )}
        </Routes>
        <Outlet></Outlet>
      </>
    )
}

export default getSoal
